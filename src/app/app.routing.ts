import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedGuard } from './guards/only-logged.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule),
    canActivate: [OnlyLoggedGuard]
  },
  {
    path: 'devices',
    loadChildren: () => import('./pages/devices/devices.module').then(x => x.DevicesModule),
    canActivate: [OnlyLoggedGuard]
  },
  {
    path: 'persons',
    loadChildren: () => import('./pages/persons/persons.module').then(x => x.PersonsModule),
    canActivate: [OnlyLoggedGuard]
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/sales/sales.module').then(x => x.SalesModule),
    canActivate: [OnlyLoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
