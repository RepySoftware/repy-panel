import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SalesPosService } from '../sales-pos.service';
import * as moment from 'moment';
import { SaleOrderPaymentOptions } from '../../models/sale-order-payment-options';
import { ToastService } from '../../../../services/toast.service';

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
    private _toast: ToastService
  ) { }

  public addPayment(): void {

    this.verifyErrors();

    const payment: SaleOrderPaymentOptions = {
      paymentMethod: this.salesPosService.paymentMethods.find(x => x.id == this.paymentMethodElement.value),
      value: Number(this.valueElement.nativeElement.value),
      dueDate: this.dueDateElement.nativeElement.value,
      payDate: this.payDateElement.nativeElement.value
    }

    this.salesPosService.payments.push(payment);
    this.clear();
  }

  public removePayment(index: number): void {
    this.salesPosService.payments.splice(index, 1);
  }

  public editPayment(index: number): void {

    const payment = this.salesPosService.payments[index];

    this.paymentMethodElement.value = payment.paymentMethod.id;
    this.valueElement.nativeElement.value = payment.value;
    this.dueDateElement.nativeElement.value = payment.dueDate;
    this.payDateElement.nativeElement.value = payment.payDate;

    this.removePayment(index);
  }

  private verifyErrors(): void {

    const errors: string[] = [];

    if (!this.salesPosService.paymentMethods.find(x => x.id == this.paymentMethodElement.value))
      errors.push('Selecione o método de pagamento');

    if (this.valueElement.nativeElement.value < 0)
      errors.push('Informe um valor');

    if (!this.dueDateElement.nativeElement.value)
      errors.push('Informe a data de vencimento');

    if (errors.length) {
      this._toast.open(errors.join(' | '), 'error');
      throw new Error(errors.join(' | '));
    }
  }

  private clear(): void {
    this.paymentMethodElement.value = null;
    this.valueElement.nativeElement.value = null;
    this.dueDateElement.nativeElement.value = this.today;
    this.payDateElement.nativeElement.value = null;
  }

}