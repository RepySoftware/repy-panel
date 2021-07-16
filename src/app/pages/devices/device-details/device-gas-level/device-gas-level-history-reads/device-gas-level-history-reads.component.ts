import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceGasLevelHistoryRead } from '../../../../../models/api/device-gas-level-history-read';
import { DeviceGasLevelHistoryReadFilter } from '../../../../../models/output/filters/device-gas-level-histpry-read.filter';
import { DeviceService } from '../../../../../services/device.service';
import { LoaderService } from '../../../../../services/loader.service';
import { ToastService } from '../../../../../services/toast.service';

export interface DeviceGasLevelHistoryReadsInputData {
  deviceId: number
}

@Component({
  selector: 'app-device-gas-level-history-reads',
  templateUrl: './device-gas-level-history-reads.component.html',
  styleUrls: ['./device-gas-level-history-reads.component.scss']
})
export class DeviceGasLevelHistoryReadsComponent implements OnInit {

  public historyReads: DeviceGasLevelHistoryRead[] = [];

  public historyReadFilter: DeviceGasLevelHistoryReadFilter = {
    limit: 40,
    index: 0
  }

  public tableColumns: string[] = [
    'createdAt',
    'cylinderWeight',
    'weight',
    'gasWeight',
    'percentage'
  ]

  constructor(
    private _deviceService: DeviceService,
    private _loader: LoaderService,
    private _toast: ToastService,
    @Inject(MAT_DIALOG_DATA) public inputData: DeviceGasLevelHistoryReadsInputData
  ) { }

  ngOnInit(): void {
    this.getHistoryReads();
  }

  private getHistoryReads(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._deviceService.getHistoryReads(
        this.inputData.deviceId,
        this.historyReadFilter
      ).subscribe(response => {
        this._loader.dismiss();

        if (options.reset)
          this.historyReads = [];

        this.historyReads = this.historyReads.concat(response);

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public loadMore(): void {
    this.historyReadFilter.index++;
    this.getHistoryReads();
  }

}
