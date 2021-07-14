import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { SalesByPeriodComponent } from './sales-by-period/sales-by-period.component';
import { PersonsCustomersNextGasSalesComponent } from './persons-customers-next-gas-sales/persons-customers-next-gas-sales.component';


@NgModule({
  declarations: [HomeComponent, SalesByPeriodComponent, PersonsCustomersNextGasSalesComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
