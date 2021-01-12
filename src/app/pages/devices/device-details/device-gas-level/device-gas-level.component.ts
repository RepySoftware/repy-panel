import { Component, OnInit } from '@angular/core';
import { DeviceGasLevel } from '../../../../models/api/device-gas-level';
import { DeviceDetailsService } from '../device-details.service';

@Component({
  selector: 'app-device-gas-level',
  templateUrl: './device-gas-level.component.html',
  styleUrls: ['./device-gas-level.component.scss']
})
export class DeviceGasLevelComponent implements OnInit {

  constructor(
    private _deviceDetailsService: DeviceDetailsService
  ) { }

  ngOnInit(): void {
  }

  public get currentPercentage(): number {
    return Math.round(this._deviceDetailsService?.device?.deviceGasLevel?.percentage || 0);
  }

  public get deviceGasLevel(): DeviceGasLevel {
    return this._deviceDetailsService.device?.deviceGasLevel;
  }
}
