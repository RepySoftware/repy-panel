import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesMapComponent } from './devices-map/devices-map.component';
import { DevicesComponent } from './devices.component';

const routes: Routes = [
    {
        path: '',
        component: DevicesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'map',
                component: DevicesMapComponent
            },
            {
                path: 'list',
                component: DevicesListComponent
            },
            {
                path: ':deviceKey/details',
                loadChildren: () => import('./device-details/device-details.module').then(m => m.DeviceDetailsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DevicesRoutingModule { }
