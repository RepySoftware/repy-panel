import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { PersonsComponent } from './persons.component';
import { PersonsRoutingModule } from './persons.routing';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    PersonsComponent,
    PersonsListComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    PipesModule,
    PersonsRoutingModule
  ]
})
export class PersonsModule { }
