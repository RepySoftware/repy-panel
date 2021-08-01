import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { DevicesMapComponent } from './devices-map/devices-map.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesViewService } from './devices-view.service';
import { DevicesRoutingModule } from './devices.routing';
import { PipesModule } from '../../pipes/pipes.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { DeviceGasLevelMapInfoComponent } from './devices-map/devices-map-info/device-gas-level-map-info/device-gas-level-map-info.component';
import { ListDeviceGasLevelComponent } from './devices-list/list-device-gas-level/list-device-gas-level.component';

@NgModule({
  declarations: [
    DevicesComponent,
    DevicesMapComponent,
    DevicesListComponent,
    DeviceGasLevelMapInfoComponent,
    ListDeviceGasLevelComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DevicesRoutingModule,
    PipesModule,
    GoogleMapsModule
  ],
  providers: [
    DevicesViewService
  ]
})
export class DevicesModule { }
