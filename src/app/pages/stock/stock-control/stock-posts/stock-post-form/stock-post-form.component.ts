import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockPostType, StockPostTypeList } from '../../../../../enums/stock-post-type';
import { CompanyBranchProduct } from '../../../../../models/api/company-branch-product';
import { RelatedProduct } from '../../../../../models/api/related-product';
import { ProductFilter } from '../../../../../models/output/filters/product.filter';
import { StockPostOutput } from '../../../../../models/output/stock-post.output';
import { AutocompleteItem } from '../../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../../models/ui/autocomplete-options';
import { LoaderService } from '../../../../../services/loader.service';
import { ProductService } from '../../../../../services/product.service';
import { StockService } from '../../../../../services/stock.service';
import { ToastService } from '../../../../../services/toast.service';

export interface StockPostFormInputData {
  companyBranchId: number;
  depositId: number;
}

@Component({
  selector: 'app-stock-post-form',
  templateUrl: './stock-post-form.component.html',
  styleUrls: ['./stock-post-form.component.scss']
})
export class StockPostFormComponent implements OnInit {

  public productSearchAutocompleteOptions: AutocompleteOptions<CompanyBranchProduct> = {
    placeholder: 'Produto',
    onGetItems: query => this.productSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.productSearchAutocompleteOnSelectItem(item),
    emitOnClear: true
  }

  public relatedProducts: {
    product: CompanyBranchProduct,
    selected: boolean
  }[] = [];

  public stockForm: FormGroup;

  public selectedProduct: CompanyBranchProduct;

  public stockPostTypes = StockPostTypeList();

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _dialogRef: MatDialogRef<StockPostFormComponent>,
    private _stockService: StockService,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public inputData: StockPostFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.stockForm = new FormGroup({
      companyBranchProduct: new FormControl(null, Validators.required),
      type: new FormControl(StockPostType.BALANCE, Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.min(0)]),
      observation: new FormControl(null),
      dateOfIssue: new FormControl(moment().format('YYYY-MM-DDTHH:mm'), Validators.required)
    });
  }

  private productSearchAutocompleteOnGetItems(query: string): Observable<AutocompleteItem<CompanyBranchProduct>[]> {

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
  }

  private productSearchAutocompleteOnSelectItem(item: AutocompleteItem<CompanyBranchProduct>): void {
    this.selectedProduct = item.value;
    this.stockForm.get('companyBranchProduct').setValue(item.value?.id || null);

    if (this.selectedProduct) {
      this.getRelatedProducts();
    } else {
      this.relatedProducts = [];
    }
  }

  private getRelatedProducts(): void {
    this._productService.getRelated(this.selectedProduct.id).subscribe(response => {
      this.relatedProducts = response.map(cbp => {
        return {
          product: cbp.referencedCompanyBranchProduct,
          selected: cbp.isDefault
        }
      });
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  public save(): void {

    if (!this.stockForm.valid) {
      this.stockForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    const type = this.stockForm.get('type').value;
    const quantity = this.stockForm.get('quantity').value;
    const depositId = this.inputData.depositId;
    const dateOfIssue = moment(this.stockForm.get('dateOfIssue').value).toISOString();
    const observation = this.stockForm.get('observation').value;

    const stockPostsOutput: StockPostOutput[] = [
      {
        companyBranchProductId: this.selectedProduct.id,
        depositId,
        type,
        quantity,
        dateOfIssue,
        observation
      },
      ...this.relatedProducts.filter(x => x.selected).map(rp => {
        return {
          companyBranchProductId: rp.product.id,
          depositId,
          type,
          quantity,
          dateOfIssue,
          observation: `[Rel.] ${observation || ''}`
        } as StockPostOutput
      })
    ];

    this._loader.show();
    this._stockService.createPosts(stockPostsOutput).subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Lançamento salvo!', 'success');
      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }
}
