import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CompanyBranchProductPrice } from '../../../../models/api/company-branch-product-price';
import { CompanyBranchProductPriceOutput } from '../../../../models/output/company-branch-product-price.output';
import { LoaderService } from '../../../../services/loader.service';
import { ProductService } from '../../../../services/product.service';
import { ToastService } from '../../../../services/toast.service';

export interface ProductPriceFormInputData {
  productId: number,
  companyBranchProductPriceId?: number
}

@Component({
  selector: 'app-product-price-form',
  templateUrl: './product-price-form.component.html',
  styleUrls: ['./product-price-form.component.scss']
})
export class ProductPriceFormComponent implements OnInit {

  public companyBranchProductPriceId: number;
  public price: CompanyBranchProductPrice;

  public priceForm: FormGroup;

  constructor(
    private _productService: ProductService,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _dialogRef: MatDialogRef<ProductPriceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: ProductPriceFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.companyBranchProductPriceId = this.inputData.companyBranchProductPriceId;

    if (this.companyBranchProductPriceId) {
      this.getPrice().then(() => {
        this.setFormValues();
      });
    }
  }

  private initForm(): void {

    this.priceForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      salePrice: new FormControl(null, Validators.required),
      isDefault: new FormControl(null),
      isActive: new FormControl(null)
    });
  }

  private setFormValues(): void {
    this.priceForm.get('name').setValue(this.price.name);
    this.priceForm.get('salePrice').setValue(this.price.salePrice);
    this.priceForm.get('isDefault').setValue(this.price.isDefault);
    this.priceForm.get('isActive').setValue(this.price.isActive);
  }

  private getPrice(companyBranchProductPriceId: number = this.companyBranchProductPriceId): Promise<CompanyBranchProductPrice> {

    return new Promise((resolve, reject) => {
      this._loader.show();
      this._productService.getPriceById(
        this.inputData.productId,
        companyBranchProductPriceId
      ).subscribe(response => {
        this._loader.dismiss();
        this.price = response;

        resolve(response);
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
      });
    });
  }

  public save(): void {

    if (!this.priceForm.valid) {
      this._toast.open('Preencha todos os campos obrigatórios', 'error');
      this.priceForm.markAllAsTouched();
      throw new Error('Invalid form');
    }

    const priceOutput: CompanyBranchProductPriceOutput = {
      productId: this.inputData.productId,
      name: this.priceForm.get('name').value,
      salePrice: this.priceForm.get('salePrice').value,
      isDefault: this.priceForm.get('isDefault').value,
      isActive: this.priceForm.get('isActive').value
    }

    let apiCall: Observable<CompanyBranchProductPrice>;

    if (this.price) {
      priceOutput.id = this.price.id;
      apiCall = this._productService.priceUpdate(priceOutput);
    } else {
      apiCall = this._productService.priceCreate(priceOutput);
    }

    this._loader.show();
    apiCall.subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Salvo com sucesso!', 'success');

      this.price = response;

      this.initForm();
      this.setFormValues();

      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

}
