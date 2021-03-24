import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { PaymentMethod } from '../../../../models/api/payment-method';
import { LoaderService } from '../../../../services/loader.service';
import { PaymentMethodService } from '../../../../services/payment-method.service';
import { ToastService } from '../../../../services/toast.service';
import { SalesPosService } from '../sales-pos.service';

@Component({
  selector: 'app-pos-payment',
  templateUrl: './pos-payment.component.html',
  styleUrls: ['./pos-payment.component.scss']
})
export class PosPaymentComponent implements OnInit {

  @ViewChild('paymentMethod') public paymentMethodElement: MatSelect;
  @ViewChild('installments') public installmentsElement: ElementRef;

  constructor(
    public salesPosService: SalesPosService
  ) { }

  ngOnInit(): void { }

  public onSelectPaymentMethod(): void {
    this.salesPosService.paymentMethod = this.salesPosService.paymentMethods.find(pm => pm.id == this.paymentMethodElement.value);
  }

  public onDefineInstallments(): void {
    this.salesPosService.paymentInstallments = this.installmentsElement.nativeElement.value;
  }

}
