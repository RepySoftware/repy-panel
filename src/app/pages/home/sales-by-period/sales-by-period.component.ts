import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { SalesByDate } from '../../../models/api/sales-by-date';
import { DashboardService } from '../../../services/dashboard.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-sales-by-period',
  templateUrl: './sales-by-period.component.html',
  styleUrls: ['./sales-by-period.component.scss']
})
export class SalesByPeriodComponent implements AfterViewInit {

  @ViewChild('startDateOfIssue') public startDateOfIssueElement: ElementRef;
  @ViewChild('endDateOfIssue') public endDateOfIssueElement: ElementRef;

  public sales: SalesByDate;

  public showButtonSpinner = false;

  constructor(
    private _dashboardService: DashboardService,
    private _cdRef: ChangeDetectorRef,
    private _toast: ToastService
  ) { }

  ngAfterViewInit() {

    const startDate = moment().startOf('day');
    const endDate = moment().endOf('day');

    this.startDateOfIssueElement.nativeElement.value = startDate.format('YYYY-MM-DD');
    this.endDateOfIssueElement.nativeElement.value = endDate.format('YYYY-MM-DD');

    this._cdRef.detectChanges();

    this.getSales(startDate.toISOString(), endDate.toISOString());
  }

  public refreshSales(): void {

    const startDate = moment(this.startDateOfIssueElement.nativeElement.value).toISOString();
    const endDate = moment(this.endDateOfIssueElement.nativeElement.value).toISOString();

    this.getSales(startDate, endDate);
  }

  private getSales(startDateOfIssue: string, endDateOfIssue: string): void {

    this.showButtonSpinner = true;
    this._cdRef.detectChanges();

    this._dashboardService.getSalesByDate(startDateOfIssue, endDateOfIssue).subscribe(response => {
      this.showButtonSpinner = false;

      this.sales = response;
      this.sales.items = this.sales.items.sort((a, b) => b.quantityIssued - a.quantityIssued);
    }, error => {
      this.showButtonSpinner = false;
      this._toast.showHttpError(error);
    });
  }
}