import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersonCustomerNextGasSale } from '../../../models/api/person-customer-next-gas-sale';
import { PersonCustomerNextGasSaleFilter } from '../../../models/output/filters/person-customer-next-gas-sale.filter';
import { DashboardService } from '../../../services/dashboard.service';
import { ToastService } from '../../../services/toast.service';
import * as moment from 'moment';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-persons-customers-next-gas-sales',
  templateUrl: './persons-customers-next-gas-sales.component.html',
  styleUrls: ['./persons-customers-next-gas-sales.component.scss']
})
export class PersonsCustomersNextGasSalesComponent implements OnInit {

  @ViewChild('personCustomer') public personCustomerElement: ElementRef;
  @ViewChild('startNextSaleMinDate') public startNextSaleMinDateElement: ElementRef;
  @ViewChild('endNextSaleMinDate') public endNextSaleMinDateElement: ElementRef;
  @ViewChild('startNextSaleMaxDate') public startNextSaleMaxDateElement: ElementRef;
  @ViewChild('endNextSaleMaxDate') public endNextSaleMaxDateElement: ElementRef;

  public showButtonSpinner: boolean = false;

  public nextSales: PersonCustomerNextGasSale[] = [];

  public nextSalesFilter: PersonCustomerNextGasSaleFilter = {
    limit: 50,
    index: 0
  }

  constructor(
    private _dashboardService: DashboardService,
    private _toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getNextSales();
  }

  private getNextSales(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {

      this.showButtonSpinner = true;
      this._dashboardService.getPersonsCustomersNextGasSales(this.nextSalesFilter).subscribe(response => {

        this.showButtonSpinner = false;

        if (options.reset)
          this.nextSales = [];

        this.nextSales = this.nextSales.concat(response);

        resolve();

      }, error => {
        this.showButtonSpinner = false;
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public loadMore(): void {
    this.nextSalesFilter.index++;
    this.getNextSales();
  }

  public search(): void {
    this.nextSalesFilter.index = 0;

    this.nextSalesFilter.personCustomer = this.personCustomerElement.nativeElement.value ? this.personCustomerElement.nativeElement.value : null;

    this.nextSalesFilter.startNextSaleMinDate = this.startNextSaleMinDateElement.nativeElement.value ? moment(this.startNextSaleMinDateElement.nativeElement.value).startOf('day').toISOString() : null;

    this.nextSalesFilter.endNextSaleMinDate = this.endNextSaleMinDateElement.nativeElement.value ? moment(this.endNextSaleMinDateElement.nativeElement.value).endOf('day').toISOString() : null;

    this.nextSalesFilter.startNextSaleMaxDate = this.startNextSaleMaxDateElement.nativeElement.value ? moment(this.startNextSaleMaxDateElement.nativeElement.value).startOf('day').toISOString() : null;

    this.nextSalesFilter.endNextSaleMaxDate = this.endNextSaleMaxDateElement.nativeElement.value ? moment(this.endNextSaleMaxDateElement.nativeElement.value).endOf('day').toISOString() : null;

    this.getNextSales({ reset: true });
  }

  public clearFilter(): void {

    this.nextSalesFilter.index = 0;

    this.nextSalesFilter.personCustomer = null;
    this.personCustomerElement.nativeElement.value = null;

    this.nextSalesFilter.startNextSaleMinDate = null;
    this.startNextSaleMinDateElement.nativeElement.value = null;

    this.nextSalesFilter.endNextSaleMinDate = null;
    this.endNextSaleMinDateElement.nativeElement.value = null;

    this.nextSalesFilter.startNextSaleMaxDate = null;
    this.startNextSaleMaxDateElement.nativeElement.value = null;

    this.nextSalesFilter.endNextSaleMaxDate = null;
    this.endNextSaleMaxDateElement.nativeElement.value = null;
    
    this.getNextSales({ reset: true });
  }

}
