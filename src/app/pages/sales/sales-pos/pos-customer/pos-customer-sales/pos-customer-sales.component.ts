import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../../../../../models/api/person';
import { SaleOrder } from '../../../../../models/api/sale-order';
import { SaleOrderFilter } from '../../../../../models/output/filters/sale-order.filter';
import { LoaderService } from '../../../../../services/loader.service';
import { SaleOrderService } from '../../../../../services/sale-order.service';
import { ToastService } from '../../../../../services/toast.service';

export interface PosCustomerSalesInputData {
  personCustomer: Person;
}

@Component({
  selector: 'app-pos-customer-sales',
  templateUrl: './pos-customer-sales.component.html',
  styleUrls: ['./pos-customer-sales.component.scss']
})
export class PosCustomerSalesComponent implements OnInit {

  public saleOrders: SaleOrder[] = [];

  public saleOrderFilter: SaleOrderFilter = {
    limit: 20,
    index: 0
  }

  public tableColumns: string[] = [
    'id',
    'datetime',
    'products',
    'totalSalePrice',
    'status'
  ]

  constructor(
    private _saleOrderService: SaleOrderService,
    private _loader: LoaderService,
    private _toast: ToastService,
    @Inject(MAT_DIALOG_DATA) public inputData: PosCustomerSalesInputData
  ) {
    this.saleOrderFilter.personCustomerId = inputData.personCustomer.id;
  }

  ngOnInit(): void {
    this.getSaleOrders();
  }

  private getSaleOrders(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._saleOrderService.getAll(this.saleOrderFilter).subscribe(response => {
        this._loader.dismiss();

        if (options.reset)
          this.saleOrders = [];

        this.saleOrders = this.saleOrders.concat(response);

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public loadMore(): void {
    this.saleOrderFilter.index++;
    this.getSaleOrders();
  }

  public formatProducts(saleOrder: SaleOrder): string {
    return saleOrder.products
      .map(so => `${so.quantity}x ${so.companyBranchProduct.product.name}`)
      .join(', ');
  }
}
