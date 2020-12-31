import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),
    ReactiveFormsModule
  ]
})
export class LoginModule { }
