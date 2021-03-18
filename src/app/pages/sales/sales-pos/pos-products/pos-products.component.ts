import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Observable } from 'rxjs';
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

  @ViewChild('productPrice') public productPriceElement: MatSelect;
  @ViewChild('quantity') public quantityElement: ElementRef;

  public productSearchAutocompleteOptions: AutocompleteOptions<CompanyBranchProduct> = {
    placeholder: 'Busca',
    onGetItems: query => this.productSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.productSearchAutocompleteOnSelectItem(item)
  }

  public companyBranches: CompanyBranch[] = [];

  public productToAdd: CompanyBranchProduct;

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    public salesPosService: SalesPosService,
    private _productService: ProductService,
    private _companyBranchService: CompanyBranchService
  ) { }

  ngOnInit(): void {
    this.getCompanyBranches();
  }

  private getCompanyBranches(): void {
    this._companyBranchService.getAll().subscribe(response => {
      this.companyBranches = response;
    }, error => {
      this._toast.showError(error);
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

  public addProduct(): void {

    if (!this.productToAdd) {
      this._toast.open('Nenhum produto selecionado');
      throw new Error('Not selected product');
    }

    if (!this.productPriceElement.value) {
      this._toast.open('Nenhum tipo de preço selecionado');
      throw new Error('Not selected price type');
    }

    if (!this.quantityElement.nativeElement.value) {
      this._toast.open('Nenhuma quantidade informada');
      throw new Error('Not defined quantity');
    }

    const posProduct: SalesPosPurchaseOrderProduct = {
      companyBranchProduct: this.productToAdd,
      price: this.productToAdd.prices.find(p => p.id == this.productPriceElement.value),
      quantity: this.quantityElement.nativeElement.value
    }

    this.salesPosService.products.push(posProduct);

    this.productToAdd = null;
  }

  public editProduct(index: number): void {

    const posProduct = this.salesPosService.products[index];

    this.productToAdd = posProduct.companyBranchProduct;
    this.productPriceElement.value = posProduct.price.id;
    this.quantityElement.nativeElement.value = posProduct.quantity;

    this.removeProduct(index);
  }

  public removeProduct(index: number): void {
    this.salesPosService.products.splice(index, 1);
  }

  public get posProductsTotalPrice(): number {
    return this.salesPosService.products
      .map(p => p.quantity * p.price.salePrice)
      .reduce((a, b) => a + b, 0);
  }

  public getPriceById(id: number): CompanyBranchProductPrice {
    if (!id) return null;
    return this.productToAdd ? this.productToAdd.prices.find(p => p.id == id) : null;
  }

}
