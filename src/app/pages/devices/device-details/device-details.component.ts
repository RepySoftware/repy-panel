import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../../../models/api/device';
import { DeviceService } from '../../../services/device.service';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  public device: Device;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    const deviceId = this._activatedRoute.snapshot.params.deviceId;

    if (!deviceId) {
      this._toast.open('Dispositivo não encontrado');
      throw new Error('Device not found');
    }

    this.getDevice(deviceId);
  }

  private getDevice(id: number): void {
    this._loader.show();
    this._deviceService.getById(id).subscribe(response => {
      this._loader.dismiss();
      this.device = response;
    }, error => {
      this._loader.dismiss();
      this._toast.showError(error);
    });
  }

}
