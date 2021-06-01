import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { StockRoutingModule } from '../stock/stock.routing';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VehiclesRoutingModule } from './vehicles.routing';

@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    VehiclesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
