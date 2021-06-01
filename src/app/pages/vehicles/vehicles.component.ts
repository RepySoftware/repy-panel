import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Vehicle } from '../../models/api/vehicle';
import { LoaderService } from '../../services/loader.service';
import { TitleService } from '../../services/title.service';
import { ToastService } from '../../services/toast.service';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleFormComponent, VehicleFormInputData } from './vehicle-form/vehicle-form.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  public vehicles: Vehicle[] = [];

  public tableColumns: string[] = [
    'id',
    'nickname',
    'description',
    'licensePlate',
    'deposit',
    'options'
  ]

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _vehicleService: VehicleService,
    private _dialog: MatDialog,
    private _title: TitleService
  ) { }

  ngOnInit(): void {
    this._title.set('Veículos');
    this.getVehicles();
  }

  private getVehicles(): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._vehicleService.getAll().subscribe(response => {
        this._loader.dismiss();
        this.vehicles = response;

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public openForm(vehicleId?: number): void {

    const data: VehicleFormInputData = { vehicleId };

    const dialog = this._dialog.open(VehicleFormComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.getVehicles();
      }
    });
  }

}
