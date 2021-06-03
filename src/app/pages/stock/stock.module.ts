import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { DepositsComponent } from './deposits/deposits.component';
import { StockRoutingModule } from './stock.routing';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { DepositFormComponent } from './deposits/deposit-form/deposit-form.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockControlComponent } from './stock-control/stock-control.component';
import { StockPostsComponent } from './stock-control/stock-posts/stock-posts.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [StockComponent, DepositsComponent, DepositFormComponent, StockControlComponent, StockPostsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    StockRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  ]
})
export class StockModule { }
