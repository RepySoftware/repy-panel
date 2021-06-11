import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../../../../models/api/device';

@Component({
  selector: 'app-device-gas-level-map-info',
  templateUrl: './device-gas-level-map-info.component.html',
  styleUrls: ['./device-gas-level-map-info.component.scss']
})
export class DeviceGasLevelMapInfoComponent implements OnInit {

  @Input('device') public device: Device;

  constructor() { }

  ngOnInit(): void {
  }

}
