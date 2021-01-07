import { Component, OnInit } from '@angular/core';
import { Device } from '../../../models/api/device';
import { DevicesViewService } from '../devices-view.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  public devices: Device[] = [];

  constructor(
    public devicesViewService: DevicesViewService
  ) { }

  ngOnInit() {
    this.devicesViewService.refreshDevices({ showLoader: true });
  }

}
