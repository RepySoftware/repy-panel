import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CompanyBranchProductPrice } from '../../../models/api/company-branch-product-price';
import { Product } from '../../../models/api/product';
import { AlertMessageService } from '../../../services/alert-message.service';
import { LoaderService } from '../../../services/loader.service';
import { ProductService } from '../../../services/product.service';
import { ToastService } from '../../../services/toast.service';
import { ProductPriceFormComponent, ProductPriceFormInputData } from './product-price-form/product-price-form.component';

export interface ProductPricesInputData {
  product: Product
}

@Component({
  selector: 'app-product-prices',
  templateUrl: './product-prices.component.html',
  styleUrls: ['./product-prices.component.scss']
})
export class ProductPricesComponent implements OnInit {

  public prices: CompanyBranchProductPrice[];

  constructor(
    private _productService: ProductService,
    private _dialog: MatDialog,
    private _loader: LoaderService,
    private _toast: ToastService,
    @Inject(MAT_DIALOG_DATA) public inputData: ProductPricesInputData
  ) { }

  ngOnInit(): void {
    this.getPrices();
  }

  private getPrices(): void {
    this._loader.show();
    this._productService.getPrices(this.inputData.product.id).subscribe(response => {
      this._loader.dismiss();
      this.prices = response;
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  public openPriceForm(price?: CompanyBranchProductPrice): void {
    const data: ProductPriceFormInputData = {
      productId: this.inputData.product.id,
      companyBranchProductPriceId: price?.id
    };

    const dialog = this._dialog.open(ProductPriceFormComponent, {
      width: '40%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.getPrices();
      }
    });
  }

}
