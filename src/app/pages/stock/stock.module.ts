import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { DepositsComponent } from './deposits/deposits.component';
import { StockRoutingModule } from './stock.routing';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { DepositFormComponent } from './deposits/deposit-form/deposit-form.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StockComponent, DepositsComponent, DepositFormComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    StockRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StockModule { }
