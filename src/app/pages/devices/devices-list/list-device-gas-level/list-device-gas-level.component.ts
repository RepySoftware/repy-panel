import { Component, Input, OnInit } from '@angular/core';
import { DeviceGasLevelStatusColor } from '../../../../enums/device-gas-level-status';
import { Device } from '../../../../models/api/device';

@Component({
  selector: 'app-list-device-gas-level',
  templateUrl: './list-device-gas-level.component.html',
  styleUrls: ['./list-device-gas-level.component.scss']
})
export class ListDeviceGasLevelComponent implements OnInit {

  @Input('device') public device: Device;

  constructor() { }

  ngOnInit(): void {
  }

  public getStatusColor(): string {
    return DeviceGasLevelStatusColor(this.device.deviceGasLevel.status);
  }
}
