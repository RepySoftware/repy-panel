import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceType } from '../../../enums/device-type';
import { Device } from '../../../models/api/device';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';
import { DeviceDetailsService } from './device-details.service';
import { DeviceGasLevelComponent } from './device-gas-level/device-gas-level.component';
import * as moment from 'moment';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('deviceContainer', { read: ViewContainerRef }) public deviceContainer: ViewContainerRef;

  private readonly deviceTypeComponent = {
    [DeviceType.GAS_LEVEL]: DeviceGasLevelComponent
  }

  private _deviceRefreshInterval = {
    interval: null,
    time: 5000
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _loader: LoaderService,
    private _toast: ToastService,
    public deviceDetailsService: DeviceDetailsService,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    const deviceKey = this._activatedRoute.snapshot.params.deviceKey;

    if (!deviceKey) {
      this._toast.open('Dispositivo não encontrado');
      throw new Error('Device not found');
    }

    this.initDevice(deviceKey);
  }

  ngOnDestroy(): void {
    clearInterval(this._deviceRefreshInterval.interval);
  }

  private initDevice(deviceKey: string): void {
    this.deviceDetailsService.getDevice({ deviceKey, showLoader: true }).then(device => {
      this.deviceContainer.clear();
      const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.deviceTypeComponent[device.type]);
      this.deviceContainer.createComponent(componentFactory);

      this._deviceRefreshInterval.interval = setInterval(
        () => this.deviceDetailsService.getDevice(),
        this._deviceRefreshInterval.time
      );

    });
  }

  public get device(): Device {
    return this.deviceDetailsService.device;
  }
}
