import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { CompanyBranch } from '../../../../../models/api/company-brach';
import { CompanyBranchProduct } from '../../../../../models/api/company-branch-product';
import { ProductFilter } from '../../../../../models/output/filters/product.filter';
import { AutocompleteItem } from '../../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../../models/ui/autocomplete-options';
import { CompanyBranchService } from '../../../../../services/company-branch.service';
import { LoaderService } from '../../../../../services/loader.service';
import { PersonService } from '../../../../../services/person.service';
import { ProductService } from '../../../../../services/product.service';
import { ToastService } from '../../../../../services/toast.service';
import { AutocompleteComponent } from '../../../../../shared/autocomplete/autocomplete.component';
import { SaleOrderProductOptions } from '../../../models/sale-order-product-options';

export interface SaleOrderProductFormInputData {
  companyBranchId: number;
  saleOrderProduct?: SaleOrderProductOptions;
}

@Component({
  selector: 'app-sale-order-product-form',
  templateUrl: './sale-order-product-form.component.html',
  styleUrls: ['./sale-order-product-form.component.scss']
})
export class SaleOrderProductFormComponent implements AfterViewInit {

  @ViewChild('productAutocomplete') public productAutocomplete: AutocompleteComponent;

  public productSelected: CompanyBranchProduct;

  private _setDefaultPrice = false;

  public productAutocompleteOptions: AutocompleteOptions<CompanyBranchProduct> = {
    placeholder: 'Produto',
    onGetItems: query => {

      const filter: ProductFilter = {
        index: 0,
        limit: 8,
        q: query
      };

      return this._productService.getAllForSales(filter, this.inputData.companyBranchId).pipe(
        map(res => {
          return res.map(x => {
            return {
              label: `${x.product.code} - ${x.product.name}`,
              value: x
            } as AutocompleteItem<CompanyBranchProduct>
          });
        })
      )
    },
    onSelectItem: item => {
      this.productSelected = item.value;

      if (this._setDefaultPrice) {
        const defaultPrice = this.productSelected.prices.find(x => x.isDefault);
        this.productForm.get('price').setValue(defaultPrice);
      }
    }
  }

  public productForm: FormGroup;

  constructor(
    private _toast: ToastService,
    private _loader: LoaderService,
    private _productService: ProductService,
    private _dialogRef: MatDialogRef<SaleOrderProductFormComponent>,
    private _cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public inputData: SaleOrderProductFormInputData
  ) {
    this.initForm();
  }

  ngAfterViewInit(): void {
    if (this.inputData.saleOrderProduct)
      this.setFormValues();
  }

  private initForm(): void {
    this.productForm = new FormGroup({
      price: new FormControl(null, Validators.required),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      salePriceValue: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  private setFormValues(): void {
    this.productSelected = this.inputData.saleOrderProduct.companyBranchProduct;
    this.productAutocomplete.selectItem({
      label: `${this.productSelected.product.code} - ${this.productSelected.product.name}`,
      value: this.productSelected
    });
    this._setDefaultPrice = true;

    this.productForm.get('price').setValue(this.inputData.saleOrderProduct.price.id);
    this.productForm.get('quantity').setValue(this.inputData.saleOrderProduct.quantity);
    this.productForm.get('salePriceValue').setValue(this.inputData.saleOrderProduct.salePriceValue);

    this._cdRef.detectChanges();
  }

  public onSelectPrice(): void {
    const price = this.productSelected.prices.find(p => p.id == this.productForm.get('price').value);
    this.productForm.get('salePriceValue').setValue(price.salePrice);
  }

  public save(): void {

    if(!this.productSelected){
      this._toast.open('Defina um produto', 'error');
      throw new Error('Product not defined');
    }

    if (!this.productForm.valid) {
      this._toast.open('Campos inválidos', 'error');
      this.productForm.markAllAsTouched();
      throw new Error('Invalid form');
    }

    const saleOrderProduct: SaleOrderProductOptions = {
      id: this.inputData.saleOrderProduct?.id,
      companyBranchProduct: this.productSelected,
      price: this.productSelected.prices.find(x => x.id == this.productForm.get('price').value),
      quantity: this.productForm.get('quantity').value,
      salePriceValue: this.productForm.get('salePriceValue').value
    }

    this._dialogRef.close({ saleOrderProduct });
  }
}
