import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../models/api/product';
import { ProductFilter } from '../../models/output/filters/product.filter';
import { LoaderService } from '../../services/loader.service';
import { ProductService } from '../../services/product.service';
import { TitleService } from '../../services/title.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  public productFilter: ProductFilter = {
    limit: 20,
    index: 0
  }

  public tableColumns: string[] = [
    'id',
    'code',
    'name',
    'measurementUnit',
    'category',
    'options'
  ]

  constructor(
    private _productService: ProductService,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _dialog: MatDialog,
    private _title: TitleService
  ) { }

  ngOnInit(): void {
    this._title.set('Produtos');
    this.getProducts();
  }

  private getProducts(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._productService.getAll(this.productFilter).subscribe(response => {
        this._loader.dismiss();

        if (options.reset)
          this.products = [];

        this.products = this.products.concat(response);

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public loadMore(): void {
    this.productFilter.index++;
    this.getProducts();
  }

  public search(query: string): void {
    this.productFilter.q = query;
    this.productFilter.index = 0;

    this.getProducts({ reset: true });
  }

  public openForm(personId?: number): void {

    // const data: PersonFormInputData = { personId };

    // const dialog = this._dialog.open(PersonFormComponent, {
    //   width: '90%',
    //   height: '90%',
    //   data
    // });

    // dialog.afterClosed().subscribe(result => {
    //   if (result && result.hasUpdate) {
    //     this.getProducts({ reset: true });
    //   }
    // });
  }

}
