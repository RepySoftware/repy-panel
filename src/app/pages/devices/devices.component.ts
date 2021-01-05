import { Component, OnInit } from '@angular/core';
import { DevicesViewService } from './devices-view.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(
    private _devicesViewService: DevicesViewService
  ) { }

  ngOnInit() {
    this._devicesViewService.getDevices();
  }

}
