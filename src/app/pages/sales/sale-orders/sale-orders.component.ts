import { Component, OnInit } from '@angular/core';
import { SaleOrder } from '../../../models/api/sale-order';
import { SaleOrderFilter } from '../../../models/output/filters/sale-order.filter';
import { LoaderService } from '../../../services/loader.service';
import { SaleOrderService } from '../../../services/sale-order.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-sale-orders',
  templateUrl: './sale-orders.component.html',
  styleUrls: ['./sale-orders.component.scss']
})
export class SaleOrdersComponent implements OnInit {

  public saleOrderFilter: SaleOrderFilter = {
    limit: 20,
    index: 0
  }

  public saleOrders: SaleOrder[] = [];

  public tableColumns: string[] = [
    'id',
    'datetime',
    'customer',
    'driver',
    'address',
    'deliveredAt',
    'status',
    'options'
  ]

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _saleOrderService: SaleOrderService
  ) { }

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

  // public search(query: string): void {
  //   this.saleOrderFilter.q = query;
  //   this.saleOrderFilter.index = 0;

  //   this.getSaleOrders({ reset: true });
  // }

}
