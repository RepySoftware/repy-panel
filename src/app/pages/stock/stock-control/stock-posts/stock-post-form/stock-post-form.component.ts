import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyBranchProduct } from '../../../../../models/api/company-branch-product';
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

  public stockForm: FormGroup;

  public selectedProduct: CompanyBranchProduct;

  public postTypes = {
    types: {
      in: 'in',
      out: 'out'
    },
    factor: {
      in: 1,
      out: -1
    },
    list: [
      { id: 'in', label: 'Entrada' },
      { id: 'out', label: 'Saída' },
    ]
  }

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
      type: new FormControl(this.postTypes.types.in, Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
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
  }

  public save(): void {

    if (!this.stockForm.valid) {
      this.stockForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    const type = this.postTypes.types[this.stockForm.get('type').value];
    const quantity = Number(this.stockForm.get('quantity').value) * this.postTypes.factor[type];

    const stockPostOutput: StockPostOutput = {
      companyBranchProductId: this.selectedProduct.id,
      depositId: this.inputData.depositId,
      quantity,
      dateOfIssue: moment(this.stockForm.get('dateOfIssue').value).toISOString(),
      observation: this.stockForm.get('observation').value
    }

    this._loader.show();
    this._stockService.createPost(stockPostOutput).subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Lançamento salvo!', 'success');
      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }
}
