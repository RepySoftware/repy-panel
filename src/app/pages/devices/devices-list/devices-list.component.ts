import { Component, ComponentFactory, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DeviceType, DeviceTypeLabel } from '../../../enums/device-type';
import { Device } from '../../../models/api/device';
import { TitleService } from '../../../services/title.service';
import { DevicesViewService } from '../devices-view.service';
import { ListDeviceGasLevelComponent } from './list-device-gas-level/list-device-gas-level.component';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  constructor(
    public devicesViewService: DevicesViewService,
    private _title: TitleService
  ) { }

  ngOnInit() {
    this._title.set('Dispositivos - Lista')
    this.devicesViewService.refreshDevices({ showLoader: true });
  }

  public getDeviceTypeLabel(device: Device): string {
    return DeviceTypeLabel(device.type);
  }
}
