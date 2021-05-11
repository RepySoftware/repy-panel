import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SalesPosService } from '../sales-pos.service';
import * as moment from 'moment';

@Component({
  selector: 'app-pos-payment',
  templateUrl: './pos-payment.component.html',
  styleUrls: ['./pos-payment.component.scss']
})
export class PosPaymentComponent {

  @ViewChild('paymentMethod') public paymentMethodElement: MatSelect;
  @ViewChild('value') public valueElement: ElementRef;
  @ViewChild('dueDate') public dueDateElement: ElementRef;
  @ViewChild('payDate') public payDateElement: ElementRef;

  public today = moment().format('YYYY-MM-DD');

  constructor(
    public salesPosService: SalesPosService,
    private _cdRef: ChangeDetectorRef
  ) { }

  public addPayment(): void {

  }

  public removeProduct(index: number): void {

  }

  public editProduct(index: number): void {

  }

}
