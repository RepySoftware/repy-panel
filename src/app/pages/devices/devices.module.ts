import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { DevicesMapComponent } from './devices-map/devices-map.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesViewService } from './devices-view.service';
import { DevicesRoutingModule } from './devices.routing';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DevicesComponent,
    DevicesMapComponent,
    DevicesListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DevicesRoutingModule,
    PipesModule
  ],
  providers: [
    DevicesViewService
  ]
})
export class DevicesModule { }
