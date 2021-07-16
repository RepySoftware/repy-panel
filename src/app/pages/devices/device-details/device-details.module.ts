import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetailsComponent } from './device-details.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { DeviceGasLevelComponent } from './device-gas-level/device-gas-level.component';
import { DeviceDetailsService } from './device-details.service';
import { PipesModule } from '../../../pipes/pipes.module';
import { DeviceGasLevelHistoryReadsComponent } from './device-gas-level/device-gas-level-history-reads/device-gas-level-history-reads.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [DeviceDetailsComponent, DeviceGasLevelComponent, DeviceGasLevelHistoryReadsComponent],
  imports: [
    CommonModule,
    PipesModule,
    SharedModule,
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
