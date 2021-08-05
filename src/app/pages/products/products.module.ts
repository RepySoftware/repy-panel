import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPricesComponent } from './product-prices/product-prices.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ProductPriceFormComponent } from './product-prices/product-price-form/product-price-form.component';

@NgModule({
  declarations: [ProductsComponent, ProductFormComponent, ProductPricesComponent, ProductPriceFormComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    PipesModule,
    FormsModule
  ]
})
export class ProductsModule { }
