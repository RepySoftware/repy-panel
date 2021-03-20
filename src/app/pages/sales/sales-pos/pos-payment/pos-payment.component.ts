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

  public paymentMethods: PaymentMethod[] = [];

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    public salesPosService: SalesPosService,
    private _paymentMethodService: PaymentMethodService
  ) { }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  private getPaymentMethods(): void {
    this._loader.show();
    this._paymentMethodService.getAll().subscribe(response => {
      this._loader.dismiss();
      this.paymentMethods = response;
    }, error => {
      this._loader.dismiss();
      this._toast.showError(error);
    });
  }

  public onSelectPaymentMethod(): void {
    this.salesPosService.paymentMethod = this.paymentMethods.find(pm => pm.id == this.paymentMethodElement.value);
  }

  public onDefineInstallments(): void {
    this.salesPosService.paymentInstallments = this.installmentsElement.nativeElement.value;
  }

  public get hasInstallments(): boolean {
    if (!this.paymentMethodElement || !this.paymentMethodElement.value) return false;
    const paymentMethod = this.paymentMethods.find(pm => pm.id == this.paymentMethodElement.value);
    return paymentMethod && paymentMethod.hasInstallments;
  }

}
