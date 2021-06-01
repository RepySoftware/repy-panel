import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeFormComponent, EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AngularMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
