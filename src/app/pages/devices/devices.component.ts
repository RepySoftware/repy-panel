import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from '../../services/title.service';
import { DevicesViewService } from './devices-view.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {

  constructor(
    public devicesViewService: DevicesViewService,
    private _title: TitleService
  ) { }

  ngOnInit() {
    this._title.set('Dispositivos');
    this.devicesViewService.refreshDevices();
  }

  ngOnDestroy() {
  }
}
