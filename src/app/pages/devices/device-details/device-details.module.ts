import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetailsComponent } from './device-details.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { DeviceGasLevelComponent } from './device-gas-level/device-gas-level.component';
import { DeviceDetailsService } from './device-details.service';
import { PipesModule } from '../../../pipes/pipes.module';


@NgModule({
  declarations: [DeviceDetailsComponent, DeviceGasLevelComponent],
  imports: [
    CommonModule,
    PipesModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeviceDetailsComponent
      }
    ])
  ],
  providers: [
    DeviceDetailsService
  ]
})
export class DeviceDetailsModule { }
