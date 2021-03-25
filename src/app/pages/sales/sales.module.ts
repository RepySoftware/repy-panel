import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SalesPosComponent } from './sales-pos/sales-pos.component';
import { SalesRoutingModule } from './sales.routing';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { PosCustomerComponent } from './sales-pos/pos-customer/pos-customer.component';
import { PosSummaryComponent } from './sales-pos/pos-summary/pos-summary.component';
import { SalesPosService } from './sales-pos/sales-pos.service';
import { PosPaymentComponent } from './sales-pos/pos-payment/pos-payment.component';
import { PipesModule } from '../../pipes/pipes.module';
import { PosProductsComponent } from './sales-pos/pos-products/pos-products.component';
import { PosDeliveryComponent } from './sales-pos/pos-delivery/pos-delivery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';
import { SaleOrdersComponent } from './sale-orders/sale-orders.component';
import { DeliveryComponent } from './delivery/delivery.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    SalesComponent,
    SalesPosComponent,
    PosCustomerComponent,
    PosSummaryComponent,
    PosPaymentComponent,
    PosProductsComponent,
    PosDeliveryComponent,
    SaleOrdersComponent,
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    PipesModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    DirectivesModule,
    DragDropModule
  ],
  providers: [
    SalesPosService
  ]
})
export class SalesModule { }
