import { Component, OnInit } from '@angular/core';
import { Device } from '../../../models/api/device';
import { TitleService } from '../../../services/title.service';
import { DevicesViewService } from '../devices-view.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  public devices: Device[] = [];

  constructor(
    public devicesViewService: DevicesViewService,
    private _title: TitleService
  ) { }

  ngOnInit() {
    this._title.set('Dispositivos - Lista')
    this.devicesViewService.refreshDevices({ showLoader: true });
  }

}
