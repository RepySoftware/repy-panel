import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyBranchProduct } from '../../../../models/api/company-branch-product';
import { Deposit } from '../../../../models/api/deposit';
import { StockPost } from '../../../../models/api/stock-post';
import { ProductFilter } from '../../../../models/output/filters/product.filter';
import { StockPostFilter } from '../../../../models/output/filters/stock-post.filter';
import { AutocompleteItem } from '../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../models/ui/autocomplete-options';
import { AlertMessageService } from '../../../../services/alert-message.service';
import { LoaderService } from '../../../../services/loader.service';
import { ProductService } from '../../../../services/product.service';
import { StockService } from '../../../../services/stock.service';
import { ToastService } from '../../../../services/toast.service';
import { StockPostFormComponent, StockPostFormInputData } from './stock-post-form/stock-post-form.component';

export interface StockPostsInputData {
  companyBranchId: number;
  depositId: number;
}

@Component({
  selector: 'app-stock-posts',
  templateUrl: './stock-posts.component.html',
  styleUrls: ['./stock-posts.component.scss']
})
export class StockPostsComponent implements OnInit {

  public deposit: Deposit;
  public stockPosts: StockPost[] = [];

  public filter: StockPostFilter;

  public tableColumns: string[] = [
    'product',
    'type',
    'quantity',
    'observation',
    'createdAt',
    'options'
  ]

  public productSearchAutocompleteOptions: AutocompleteOptions<CompanyBranchProduct> = {
    placeholder: 'Produto',
    onGetItems: query => this.productSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.productSearchAutocompleteOnSelectItem(item),
    emitOnClear: true
  }

  public selectedProduct: CompanyBranchProduct;

  constructor(
    private _toast: ToastService,
    private _loader: LoaderService,
    private _stockService: StockService,
    private _dialog: MatDialog,
    private _alert: AlertMessageService,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public inputData: StockPostsInputData
  ) {
    this.filter = {
      index: 0,
      limit: 40,
      depositId: inputData.depositId
    }
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this._loader.show();

    Promise.all([
      this.getDeposit(),
      this.getPosts()
    ]).then(() => this._loader.dismiss())
      .catch(() => this._loader.dismiss());
  }

  private getDeposit(options: { showLoader?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {

      if (options?.showLoader)
        this._loader.show();

      this._stockService.getDepositById(this.inputData.depositId).subscribe(response => {

        if (options?.showLoader)
          this._loader.dismiss();

        this.deposit = response;

        resolve();
      }, error => {

        if (options?.showLoader)
          this._loader.dismiss();

        this._toast.showHttpError(error);

        reject();
      });
    });
  }

  private getPosts(options: { showLoader?: boolean, concat?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {

      if (options?.showLoader)
        this._loader.show();

      this._stockService.getPosts(this.filter).subscribe(response => {

        if (options?.showLoader)
          this._loader.dismiss();

        if (options?.concat)
          this.stockPosts = this.stockPosts.concat(response);
        else
          this.stockPosts = response;

        resolve();
      }, error => {

        if (options?.showLoader)
          this._loader.dismiss();

        this._toast.showHttpError(error);

        reject();
      });
    });
  }

  public openPostForm(): void {

    const data: StockPostFormInputData = {
      companyBranchId: this.inputData.companyBranchId,
      depositId: this.deposit.id
    }

    const dialog = this._dialog.open(StockPostFormComponent, {
      width: '50%',
      height: '80%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.refresh();
      }
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

    this.filter.companyBranchProductId = this.selectedProduct?.id;
    this.filterProduct();
  }

  public loadMore(): void {
    this.filter.index++;
    this.getPosts({ concat: true });
  }

  public filterProduct(): void {
    this.filter.index = 0;

    this.getPosts({ showLoader: true });
  }

  public deletePost(stockPost: StockPost): void {
    this._alert.open({
      message: `Excluir lançamento #${stockPost.id}? 😕`,
      title: `#${stockPost.id}`,
      buttons: [
        {
          text: 'Cancelar',
          closeOnClick: true
        },
        {
          text: 'Excluir',
          color: 'warn',
          onClick: () => {
            this._loader.show();
            this._stockService.deletePost(stockPost.id).subscribe(response => {
              this._loader.dismiss();
              this._toast.open('Excluído com sucesso', 'success');

              this.refresh();

            }, error => {
              this._loader.dismiss();
              this._toast.showHttpError(error);
            });
          }
        }
      ]
    });
  }
}
