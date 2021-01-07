import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesViewService } from './devices-view.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {

  constructor(
    public devicesViewService: DevicesViewService
  ) { }

  ngOnInit() {
    this.devicesViewService.refreshDevices();
  }

  ngOnDestroy() {
  }
}
