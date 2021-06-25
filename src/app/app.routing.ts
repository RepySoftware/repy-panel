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
  },
  {
    path: 'stock',
    loadChildren: () => import('./pages/stock/stock.module').then(x => x.StockModule),
    canActivate: [OnlyLoggedGuard]
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/vehicles/vehicles.module').then(x => x.VehiclesModule),
    canActivate: [OnlyLoggedGuard]
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then(x => x.EmployeesModule),
    canActivate: [OnlyLoggedGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(x => x.ProductsModule),
    canActivate: [OnlyLoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
