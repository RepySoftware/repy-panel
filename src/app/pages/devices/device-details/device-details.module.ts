import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetailsComponent } from './device-details.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../../shared/angular-material.module';


@NgModule({
  declarations: [DeviceDetailsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: DeviceDetailsComponent
      }
    ])
  ]
})
export class DeviceDetailsModule { }
