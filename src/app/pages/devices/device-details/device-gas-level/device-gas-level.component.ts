import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceGasLevel } from '../../../../models/api/device-gas-level';
import { DeviceDetailsService } from '../device-details.service';
import { DeviceGasLevelHistoryReadsComponent, DeviceGasLevelHistoryReadsInputData } from './device-gas-level-history-reads/device-gas-level-history-reads.component';

@Component({
  selector: 'app-device-gas-level',
  templateUrl: './device-gas-level.component.html',
  styleUrls: ['./device-gas-level.component.scss']
})
export class DeviceGasLevelComponent implements OnInit {

  constructor(
    private _deviceDetailsService: DeviceDetailsService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openHistoryReads(): void {
    const data: DeviceGasLevelHistoryReadsInputData = {
      deviceId: this._deviceDetailsService.deviceId
    };

    this._dialog.open(DeviceGasLevelHistoryReadsComponent, {
      width: '60%',
      height: '90%',
      data
    });
  }

  public get currentPercentage(): number {
    return Math.round(this._deviceDetailsService?.device?.deviceGasLevel?.percentage || 0);
  }

  public get deviceGasLevel(): DeviceGasLevel {
    return this._deviceDetailsService.device?.deviceGasLevel;
  }
}
