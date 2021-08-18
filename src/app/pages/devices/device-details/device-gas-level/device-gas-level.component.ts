import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeviceGasLevelStatusColor, DeviceGasLevelStatusLabel } from '../../../../enums/device-gas-level-status';
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
    private _dialog: MatDialog,
    private _router: Router
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

  public createSale(): void {
    this._router.navigate(['/sales/pos'], {
      queryParams: {
        personCustomerId: this._deviceDetailsService.device.person.id
      }
    });
  }

  public get currentPercentage(): number {
    return Number(this._deviceDetailsService?.device?.deviceGasLevel?.percentage?.toFixed(2));
  }

  public get deviceGasLevel(): DeviceGasLevel {
    return this._deviceDetailsService.device?.deviceGasLevel;
  }

  public getStatusColor(): string {
    return DeviceGasLevelStatusColor(this._deviceDetailsService.device.deviceGasLevel?.status);
  }

  public getStatus(): string {
    return DeviceGasLevelStatusLabel(this._deviceDetailsService.device.deviceGasLevel?.status);
  }
}
