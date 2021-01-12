import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceType } from '../../../enums/device-type';
import { Device } from '../../../models/api/device';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';
import { DeviceDetailsService } from './device-details.service';
import { DeviceGasLevelComponent } from './device-gas-level/device-gas-level.component';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  @ViewChild('deviceContainer', { read: ViewContainerRef }) public deviceContainer: ViewContainerRef;

  private readonly deviceTypeComponent = {
    [DeviceType.gasLevel]: DeviceGasLevelComponent
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

    this.getDevice(deviceKey);
  }

  private getDevice(deviceKey: string): void {
    this.deviceDetailsService.getDevice({ deviceKey, showLoader: true }).then(device => {
      this.deviceContainer.clear();
      const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.deviceTypeComponent[device.type]);
      this.deviceContainer.createComponent(componentFactory);
    });
  }

  public get device(): Device {
    return this.deviceDetailsService.device;
  }
}
