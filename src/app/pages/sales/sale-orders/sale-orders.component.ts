import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaleOrderStatusList } from '../../../enums/sale-order-status';
import { Employee } from '../../../models/api/employee';
import { PaymentMethod } from '../../../models/api/payment-method';
import { PersonSearch } from '../../../models/api/person-search';
import { SaleOrder } from '../../../models/api/sale-order';
import { EmployeeFilter } from '../../../models/output/filters/employee.filter';
import { PersonSearchFilter } from '../../../models/output/filters/person-search.filter';
import { SaleOrderFilter } from '../../../models/output/filters/sale-order.filter';
import { AutocompleteItem } from '../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../models/ui/autocomplete-options';
import { AlertMessageService } from '../../../services/alert-message.service';
import { EmployeeService } from '../../../services/employee.service';
import { LoaderService } from '../../../services/loader.service';
import { PaymentMethodService } from '../../../services/payment-method.service';
import { PersonService } from '../../../services/person.service';
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
  @ViewChild('personCustomerAutocomplete') public personCustomerAutocomplete: AutocompleteComponent;
  @ViewChild('startDateOfIssue') public startDateOfIssueElement: ElementRef;
  @ViewChild('endDateOfIssue') public endDateOfIssueElement: ElementRef;
  @ViewChild('saleOrderStatus') public saleOrderStatusElement: MatSelect;
  @ViewChild('paymentMethod') public paymentMethodElement: MatSelect;

  public employeeDriverSearchAutocompleteOptions: AutocompleteOptions<Employee> = {
    placeholder: 'Entregador',
    onGetItems: query => this.employeeDriverSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.employeeDriverSearchAutocompleteOnSelectItem(item),
    emitOnClear: true
  }
  public employeeDriverSelected: Employee;

  public personCustomerSearchAutocompleteOptions: AutocompleteOptions<PersonSearch> = {
    placeholder: 'Cliente',
    onGetItems: query => this.personCustomerSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.personCustomerSearchAutocompleteOnSelectItem(item),
    emitOnClear: true
  }
  public personCustomerSelected: PersonSearch;

  public paymentMethods: PaymentMethod[] = [];

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
    'products',
    'totalSalePrice',
    'status',
    'options'
  ]

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _saleOrderService: SaleOrderService,
    private _employeeService: EmployeeService,
    private _paymentMethodService: PaymentMethodService,
    private _dialog: MatDialog,
    private _alert: AlertMessageService,
    private _personService: PersonService
  ) { }

  ngOnInit(): void {
    this.getSaleOrders();
    this.getPaymentMethods();
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
    this.saleOrderFilter.startDateOfIssue = this.startDateOfIssueElement.nativeElement.value ? moment(this.startDateOfIssueElement.nativeElement.value).toISOString() : null;
    this.saleOrderFilter.endDateOfIssue = this.endDateOfIssueElement.nativeElement.value ? moment(this.endDateOfIssueElement.nativeElement.value).toISOString() : null;
    this.saleOrderFilter.status = this.saleOrderStatusElement.value;
    this.saleOrderFilter.personCustomerId = this.personCustomerSelected?.id;
    this.saleOrderFilter.paymentMethodId = this.paymentMethodElement.value;

    this.getSaleOrders({ reset: true });
  }

  public clearFilter(): void {
    this.employeeDriverSelected = null;
    this.startDateOfIssueElement.nativeElement.value = null;
    this.endDateOfIssueElement.nativeElement.value = null;
    this.saleOrderStatusElement.value = null;
    this.personCustomerSelected = null;
    this.paymentMethodElement.value = null;

    this.employeeDriverAutocomplete.clear();
    this.personCustomerAutocomplete.clear();
  }

  private getPaymentMethods(): void {
    this._paymentMethodService.getAll().subscribe(response => {
      this.paymentMethods = response;
    }, error => {
      this._toast.showHttpError(error);
    });
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

  private personCustomerSearchAutocompleteOnGetItems(query: string): Observable<AutocompleteItem<PersonSearch>[]> {

    const filter: PersonSearchFilter = {
      index: 0,
      limit: 8,
      q: query
    };

    return this._personService.search(filter).pipe(
      map(res => {
        return res.map(x => {
          return {
            label: `${x.name || ''} (${x.id})`,
            value: x
          } as AutocompleteItem<PersonSearch>
        });
      })
    )
  }

  private personCustomerSearchAutocompleteOnSelectItem(item: AutocompleteItem<PersonSearch>): void {
    this.personCustomerSelected = item.value;
  }

  public openSaleOrderDetails(saleOrder: SaleOrder): void {
    this._dialog.open(SaleOrderDetailsComponent, {
      data: { saleOrder } as SaleOrderDetailsInputData,
      width: '60%',
      height: '90vh'
    });
  }

  public openForm(saleOrder?: SaleOrder): void {

    const data: SaleOrderFormInputData = { saleOrderId: saleOrder?.id };

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

  public deleteSaleOrder(saleOrder: SaleOrder): void {

    this._alert.open({
      message: `Excluir pedido #${saleOrder.id}? 😕`,
      title: `#${saleOrder.id}`,
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
            this._saleOrderService.delete(saleOrder.id).subscribe(response => {
              this._loader.dismiss();
              this._toast.open('Excluído com sucesso', 'success');

              this.search();

            }, error => {
              this._loader.dismiss();
              this._toast.showHttpError(error);
            });
          }
        }
      ]
    });
  }

  public formatProducts(saleOrder: SaleOrder): string {
    return saleOrder.products
      .map(so => `${so.quantity}x ${so.companyBranchProduct.product.name}`)
      .join(', ');
  }

  public get saleOrderStatusList(): string[] {
    return SaleOrderStatusList();
  }
}
