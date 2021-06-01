import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Deposit } from '../../../models/api/deposit';
import { Vehicle } from '../../../models/api/vehicle';
import { VehicleOutput } from '../../../models/output/vehicle.output';
import { DepositService } from '../../../services/deposit.service';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';
import { VehicleService } from '../../../services/vehicle.service';

export interface VehicleFormInputData {
  vehicleId?: number;
}

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {

  public vehicle: Vehicle;
  public deposits: Deposit[] = [];

  public vehicleForm: FormGroup;

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _vehicleService: VehicleService,
    private _depositService: DepositService,
    private _dialogRef: MatDialogRef<VehicleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: VehicleFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {

    this.getDeposits();

    if (this.inputData.vehicleId) {
      this.getVehicle().then(() => this.setFormValues());
    }
  }

  private initForm(): void {
    this.vehicleForm = new FormGroup({
      description: new FormControl(null, Validators.required),
      nickname: new FormControl(null),
      licensePlate: new FormControl(null, Validators.required),
      deposit: new FormControl(null)
    });
  }

  private setFormValues(): void {
    this.vehicleForm.get('description').setValue(this.vehicle.description);
    this.vehicleForm.get('nickname').setValue(this.vehicle.nickname);
    this.vehicleForm.get('licensePlate').setValue(this.vehicle.licensePlate);
    this.vehicleForm.get('deposit').setValue(this.vehicle.deposit?.id);
  }

  private getVehicle(): Promise<Vehicle> {
    return new Promise((resolve, reject) => {
      this._loader.show();
      this._vehicleService.getById(this.inputData.vehicleId).subscribe(response => {
        this._loader.dismiss();
        this.vehicle = response;
        resolve(response);
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject(error);
      });
    });
  }

  private getDeposits(): void {
    this._depositService.getAll().subscribe(response => {
      this.deposits = response;
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  public save(): void {
    if (!this.vehicleForm.valid) {
      this.vehicleForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    const vehicleOutput: VehicleOutput = {
      description: this.vehicleForm.get('description').value,
      nickname: this.vehicleForm.get('nickname').value,
      licensePlate: this.vehicleForm.get('licensePlate').value,
      depositId: this.vehicleForm.get('deposit').value
    }

    let apiCall: Observable<Vehicle>;

    if (this.vehicle) {
      vehicleOutput.id = this.vehicle.id;
      apiCall = this._vehicleService.update(vehicleOutput);
    } else {
      apiCall = this._vehicleService.create(vehicleOutput);
    }

    this._loader.show();
    apiCall.subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Salvo com sucesso!', 'success');

      this.vehicle = response;

      this.initForm();
      this.setFormValues();

      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  public get isModal(): boolean {
    return !!this.inputData;
  }

}
