import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Employee } from '../../../models/api/employee';
import { Vehicle } from '../../../models/api/vehicle';
import { EmployeeOutput } from '../../../models/output/employee.output';
import { EmployeeService } from '../../../services/employee.service';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';
import { VehicleService } from '../../../services/vehicle.service';

export interface EmployeeFormInputData {
  employeeId?: number;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public employee: Employee;
  public vehicles: Vehicle[] = [];

  public employeeForm: FormGroup;

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _employeeService: EmployeeService,
    private _vehicleService: VehicleService,
    private _dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: EmployeeFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {

    this.getVehicles();

    if (this.inputData.employeeId) {
      this.getEmployee().then(() => this.setFormValues());
    }
  }

  private initForm(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      documentNumber: new FormControl(null),
      email: new FormControl(null),
      color: new FormControl(null),
      vehicle: new FormControl(null),
      isManager: new FormControl(null),
      isAgent: new FormControl(null),
      isDriver: new FormControl(null),
      isActive: new FormControl(null)
    });
  }

  private setFormValues(): void {
    this.employeeForm.get('name').setValue(this.employee.name);
    this.employeeForm.get('documentNumber').setValue(this.employee.documentNumber);
    this.employeeForm.get('email').setValue(this.employee.email);
    this.employeeForm.get('color').setValue(this.employee.color);
    this.employeeForm.get('vehicle').setValue(this.employee.vehicle?.id);
    this.employeeForm.get('isManager').setValue(this.employee.isManager);
    this.employeeForm.get('isAgent').setValue(this.employee.isAgent);
    this.employeeForm.get('isDriver').setValue(this.employee.isDriver);
    this.employeeForm.get('isActive').setValue(this.employee.isActive);
  }

  private getEmployee(): Promise<Employee> {
    return new Promise((resolve, reject) => {
      this._loader.show();
      this._employeeService.getById(this.inputData.employeeId).subscribe(response => {
        this._loader.dismiss();
        this.employee = response;
        resolve(response);
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject(error);
      });
    });
  }

  private getVehicles(): void {
    this._vehicleService.getAll().subscribe(response => {
      this.vehicles = response;
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  public save(): void {
    if (!this.employeeForm.valid) {
      this.employeeForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    const employeeOutput: EmployeeOutput = {
      name: this.employeeForm.get('name').value,
      documentNumber: this.employeeForm.get('documentNumber').value,
      email: this.employeeForm.get('email').value,
      color: this.employeeForm.get('color').value,
      vehicleId: this.employeeForm.get('vehicle').value,
      isManager: this.employeeForm.get('isManager').value,
      isAgent: this.employeeForm.get('isAgent').value,
      isDriver: this.employeeForm.get('isDriver').value,
      isActive: this.employeeForm.get('isActive').value
    }

    let apiCall: Observable<Employee>;

    if (this.employee) {
      employeeOutput.id = this.employee.id;
      apiCall = this._employeeService.update(employeeOutput);
    } else {
      apiCall = this._employeeService.create(employeeOutput);
    }

    this._loader.show();
    apiCall.subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Salvo com sucesso!', 'success');

      this.employee = response;

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
