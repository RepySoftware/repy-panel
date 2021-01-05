import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { RouterModule } from '@angular/router';
import { DevicesMapComponent } from './devices-map/devices-map.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesViewService } from './devices-view.service';

@NgModule({
  declarations: [
    DevicesComponent,
    DevicesMapComponent,
    DevicesListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: DevicesComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'map'
          },
          {
            path: 'map',
            component: DevicesMapComponent
          },
          {
            path: 'list',
            component: DevicesListComponent
          }
        ]
      }
    ])
  ],
  providers: [
    DevicesViewService
  ]
})
export class DevicesModule { }
