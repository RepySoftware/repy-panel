import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SalesPosComponent } from './sales-pos/sales-pos.component';
import { SalesRoutingModule } from './sales.routing';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { PosCustomerComponent } from './sales-pos/pos-customer/pos-customer.component';
import { PosOrderComponent } from './sales-pos/pos-order/pos-order.component';
import { PosSummaryComponent } from './sales-pos/pos-summary/pos-summary.component';

@NgModule({
  declarations: [
    SalesComponent,
    SalesPosComponent,
    PosCustomerComponent,
    PosOrderComponent,
    PosSummaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }