import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersRoutingModule } from './customers.routing';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
