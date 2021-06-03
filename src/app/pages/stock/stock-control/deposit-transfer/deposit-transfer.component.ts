import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyBranchProduct } from '../../../../models/api/company-branch-product';
import { Deposit } from '../../../../models/api/deposit';
import { ProductFilter } from '../../../../models/output/filters/product.filter';
import { AutocompleteItem } from '../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../models/ui/autocomplete-options';
import { DepositService } from '../../../../services/deposit.service';
import { LoaderService } from '../../../../services/loader.service';
import { ProductService } from '../../../../services/product.service';
import { StockService } from '../../../../services/stock.service';
import { ToastService } from '../../../../services/toast.service';
import * as moment from 'moment';
import { DepositTransferOutput } from '../../../../models/output/deposit-transfer.output';

export interface DepositTransferInputData {
  companyBranchId: number;
}

@Component({
  selector: 'app-deposit-transfer',
  templateUrl: './deposit-transfer.component.html',
  styleUrls: ['./deposit-transfer.component.scss']
})
export class DepositTransferComponent implements OnInit {

  public productSearchAutocompleteOptions: AutocompleteOptions<CompanyBranchProduct> = {
    placeholder: 'Produto',
    onGetItems: query => this.productSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.productSearchAutocompleteOnSelectItem(item),
    emitOnClear: true
  }

  public selectedProduct: CompanyBranchProduct;

  public deposits: Deposit[] = [];

  public depositTransferForm: FormGroup;

  constructor(
    private _toast: ToastService,
    private _loader: LoaderService,
    private _stockService: StockService,
    private _productService: ProductService,
    private _depositService: DepositService,
    private _dialogRef: MatDialogRef<DepositTransferComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: DepositTransferInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getDeposits();
  }

  private initForm(): void {
    this.depositTransferForm = new FormGroup({
      originDeposit: new FormControl(null, Validators.required),
      destinationDeposit: new FormControl(null, Validators.required),
      companyBranchProduct: new FormControl(null, Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      dateOfIssue: new FormControl(moment().format('YYYY-MM-DDTHH:mm'), Validators.required),
      observation: new FormControl(null)
    });
  }

  private getDeposits(): void {
    this._loader.show();

    this._depositService.getAll({ companyBranchId: this.inputData.companyBranchId }).subscribe(response => {
      this._loader.dismiss();
      this.deposits = response;
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
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
    this.depositTransferForm.get('companyBranchProduct').setValue(item.value?.id || null);
  }

  public transfer(): void {

    if (!this.depositTransferForm.valid) {
      this.depositTransferForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    const params: DepositTransferOutput = {
      originDepositId: this.depositTransferForm.get('originDeposit').value,
      destinationDepositId: this.depositTransferForm.get('destinationDeposit').value,
      companyBranchProductId: this.depositTransferForm.get('companyBranchProduct').value,
      quantity: this.depositTransferForm.get('quantity').value,
      dateOfIssue: moment(this.depositTransferForm.get('dateOfIssue').value).toISOString(),
      observation: this.depositTransferForm.get('observation').value
    }

    this._loader.show();
    this._stockService.depositTransfer(params).subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Transferência concluída', 'success');
      this._dialogRef.close();
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
      this._dialogRef.close({ hasUpdate: true });
    });
  }
}
