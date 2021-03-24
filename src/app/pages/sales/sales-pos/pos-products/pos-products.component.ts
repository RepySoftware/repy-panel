import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyBranch } from '../../../../models/api/company-brach';
import { CompanyBranchProduct } from '../../../../models/api/company-branch-product';
import { CompanyBranchProductPrice } from '../../../../models/api/company-branch-product-price';
import { ProductFilter } from '../../../../models/output/filters/product.filter';
import { AutocompleteItem } from '../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../models/ui/autocomplete-options';
import { CompanyBranchService } from '../../../../services/company-branch.service';
import { LoaderService } from '../../../../services/loader.service';
import { ProductService } from '../../../../services/product.service';
import { ToastService } from '../../../../services/toast.service';
import { AutocompleteComponent } from '../../../../shared/autocomplete/autocomplete.component';
import { SalesPosPurchaseOrderProduct } from '../../models/sales-pos-purchase-order-item';
import { SalesPosService } from '../sales-pos.service';

@Component({
  selector: 'app-pos-products',
  templateUrl: './pos-products.component.html',
  styleUrls: ['./pos-products.component.scss']
})
export class PosProductsComponent implements OnInit {

  @ViewChild('companyBranch') public companyBranchElement: MatSelect;
  @ViewChild('productAutocomplete') public productAutocomplete: AutocompleteComponent;

  // @ViewChild('productPrice') public productPriceElement: MatSelect;
  // @ViewChild('quantity') public quantityElement: ElementRef;

  public productSearchAutocompleteOptions: AutocompleteOptions<CompanyBranchProduct> = {
    placeholder: 'Busca',
    onGetItems: query => this.productSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.productSearchAutocompleteOnSelectItem(item)
  }

  public productToAdd: CompanyBranchProduct;

  public addProductForm: FormGroup;

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    public salesPosService: SalesPosService,
    private _productService: ProductService
  ) {
    this.initForm();
  }

  ngOnInit(): void {  }

  private initForm(): void {
    this.addProductForm = new FormGroup({
      price: new FormControl(null, Validators.required),
      salePriceValue: new FormControl(0, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(1, Validators.required)
    });
  }

  private productSearchAutocompleteOnGetItems(query: string): Observable<AutocompleteItem<CompanyBranchProduct>[]> {

    const filter: ProductFilter = {
      index: 0,
      limit: 8,
      q: query
    };

    return this._productService.getAllForSales(filter, this.companyBranchElement.value).pipe(
      map(res => {
        return res.map(x => {
          return {
            label: `${x.product.code} - ${x.product.name}`,
            value: x
          } as AutocompleteItem<CompanyBranchProduct>
        });
      })
    )
  }

  private productSearchAutocompleteOnSelectItem(item: AutocompleteItem<CompanyBranchProduct>): void {
    this.productToAdd = item.value;
    this.productAutocomplete.clear();
  }

  public onSelectPrice(): void {
    const price = this.productToAdd.prices.find(p => p.id == this.addProductForm.get('price').value);
    this.addProductForm.get('salePriceValue').setValue(price.salePrice);
  }

  public addProduct(): void {

    if (!this.productToAdd) {
      this._toast.open('Nenhum produto selecionado');
      throw new Error('Not selected product');
    }

    if (!this.addProductForm.valid) {
      this.addProductForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Not selected product');
    }

    const price = this.productToAdd.prices.find(p => p.id == this.addProductForm.get('price').value);

    const posProduct: SalesPosPurchaseOrderProduct = {
      companyBranchProduct: this.productToAdd,
      price,
      salePriceValue: this.addProductForm.get('salePriceValue').value,
      quantity: this.addProductForm.get('quantity').value
    }

    this.salesPosService.products.push(posProduct);

    this.productToAdd = null;
  }

  public editProduct(index: number): void {

    const posProduct = this.salesPosService.products[index];

    this.productToAdd = posProduct.companyBranchProduct;

    this.addProductForm.get('price').setValue(posProduct.price.id);
    this.addProductForm.get('salePriceValue').setValue(posProduct.salePriceValue);
    this.addProductForm.get('quantity').setValue(posProduct.quantity);

    this.removeProduct(index);
  }

  public removeProduct(index: number): void {
    this.salesPosService.products.splice(index, 1);
  }

  public onSelectCompanyBranch(): void {
    this.salesPosService.companyBranch = this.salesPosService.companyBranches.find(cb => cb.id == this.companyBranchElement.value);
  }
}
