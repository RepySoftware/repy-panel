import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../../models/api/employee';
import { SaleOrder } from '../../../models/api/sale-order';
import { EmployeeFilter } from '../../../models/output/filters/employee.filter';
import { SaleOrderFilter } from '../../../models/output/filters/sale-order.filter';
import { AutocompleteItem } from '../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../models/ui/autocomplete-options';
import { EmployeeService } from '../../../services/employee.service';
import { LoaderService } from '../../../services/loader.service';
import { SaleOrderService } from '../../../services/sale-order.service';
import { ToastService } from '../../../services/toast.service';
import { AutocompleteComponent } from '../../../shared/autocomplete/autocomplete.component';
import { SaleOrderDetailsComponent, SaleOrderDetailsInputData } from './sale-order-details/sale-order-details.component';
import { SaleOrderFormComponent, SaleOrderFormInputData } from './sale-order-form/sale-order-form.component';

@Component({
  selector: 'app-sale-orders',
  templateUrl: './sale-orders.component.html',
  styleUrls: ['./sale-orders.component.scss']
})
export class SaleOrdersComponent implements OnInit {

  @ViewChild('employeeDriverAutocomplete') public employeeDriverAutocomplete: AutocompleteComponent;
  @ViewChild('startCreatedAt') public startCreatedAtElement: ElementRef;
  @ViewChild('endCreatedAt') public endCreatedAtElement: ElementRef;

  public employeeDriverSearchAutocompleteOptions: AutocompleteOptions<Employee> = {
    placeholder: 'Entregador',
    onGetItems: query => this.employeeDriverSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.employeeDriverSearchAutocompleteOnSelectItem(item),
    emitOnClear: true
  }
  public employeeDriverSelected: Employee;

  public saleOrderFilter: SaleOrderFilter = {
    limit: 50,
    index: 0
  }

  public saleOrders: SaleOrder[] = [];

  public tableColumns: string[] = [
    'id',
    'datetime',
    'customer',
    'driver',
    'scheduledAt',
    'deliveredAt',
    'paymentMethod',
    'totalSalePrice',
    'status',
    'options'
  ]

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _saleOrderService: SaleOrderService,
    private _employeeService: EmployeeService,
    private _dialog: MatDialog
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

  public search(): void {
    this.saleOrderFilter.index = 0;
    this.saleOrderFilter.employeeDriverId = this.employeeDriverSelected?.id;
    this.saleOrderFilter.startCreatedAt = this.startCreatedAtElement.nativeElement.value ? moment(this.startCreatedAtElement.nativeElement.value).toISOString() : null;
    this.saleOrderFilter.endCreatedAt = this.endCreatedAtElement.nativeElement.value ? moment(this.endCreatedAtElement.nativeElement.value).toISOString() : null;

    this.getSaleOrders({ reset: true });
  }

  public clearFilter(): void {
    this.employeeDriverSelected = null;
    this.startCreatedAtElement.nativeElement.value = null;
    this.endCreatedAtElement.nativeElement.value = null;
  }

  private employeeDriverSearchAutocompleteOnGetItems(query: string): Observable<AutocompleteItem<Employee>[]> {

    const filter: EmployeeFilter = {
      index: 0,
      limit: 8,
      q: query,
      isDriver: true,
    };

    return this._employeeService.getAll(filter).pipe(
      map(res => {
        return res.map(x => {
          return {
            label: x.name,
            value: x
          } as AutocompleteItem<Employee>
        });
      })
    )
  }

  private employeeDriverSearchAutocompleteOnSelectItem(item: AutocompleteItem<Employee>): void {
    this.employeeDriverSelected = item.value;
  }

  public openSaleOrderDetails(saleOrder: SaleOrder): void {
    this._dialog.open(SaleOrderDetailsComponent, {
      data: { saleOrder } as SaleOrderDetailsInputData,
      width: '60%',
      height: '90vh'
    });
  }

  public openForm(saleOrder?: SaleOrder): void {

    const data: SaleOrderFormInputData = { saleOrderId: saleOrder.id };

    const dialog = this._dialog.open(SaleOrderFormComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.getSaleOrders({ reset: true });
      }
    });
  }
}
