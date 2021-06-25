import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [ProductsComponent, ProductFormComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
