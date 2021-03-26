import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaleOrder } from '../../../../models/api/sale-order';
import { LoaderService } from '../../../../services/loader.service';
import { ToastService } from '../../../../services/toast.service';
import * as moment from 'moment';
import { PaymentMethod } from '../../../../models/api/payment-method';
import { PaymentMethodService } from '../../../../services/payment-method.service';
import { MatSelect } from '@angular/material/select';
import { SaleOrderService } from '../../../../services/sale-order.service';

export interface ConfirmDeliveryInputData {
  saleOrder: SaleOrder;
}

@Component({
  selector: 'app-confirm-delivery',
  templateUrl: './confirm-delivery.component.html',
  styleUrls: ['./confirm-delivery.component.scss']
})
export class ConfirmDeliveryComponent implements OnInit {

  @ViewChild('deliveredAt') public deliveredAtElement: ElementRef;
  @ViewChild('paymentMethod') public paymentMethodElement: MatSelect;
  @ViewChild('installments') public installmentsElement: ElementRef;

  public now = moment().format('YYYY-MM-DDTHH:mm');
  public paymentMethods: PaymentMethod[] = [];

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _saleOrderService: SaleOrderService,
    private _paymentMethodService: PaymentMethodService,
    private _dialogRef: MatDialogRef<ConfirmDeliveryComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: ConfirmDeliveryInputData
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
      this._toast.showHttpError(error);
    });
  }

  public cancel(): void {
    this._dialogRef.close();
  }

  public confirm(): void {
    const errors = [];

    if (!this.deliveredAtElement.nativeElement.value)
      errors.push('Data de entrega é obrigatória');

    if (!this.paymentMethodElement.value)
      errors.push('Método de pagamento é obrigatório');

    if (
      this.hasInstallments
      && (!this.installmentsElement.nativeElement.value || Number(this.installmentsElement.nativeElement.value) <= 0)
    ) {
      errors.push('Número de parcelas inválido');
    }

    if (errors.length) {
      const errorsStr = errors.join(' | ');
      this._toast.open(errorsStr, 'error');
      throw new Error(errorsStr);
    }

    this._loader.show();
    this._saleOrderService.confirmDelivery({
      saleOrderId: this.inputData.saleOrder.id,
      paymentMethodId: Number(this.paymentMethodElement.value),
      installments: this.installmentsElement && this.installmentsElement.nativeElement.value ? Number(this.installmentsElement.nativeElement.value) : null,
      deliveredAt: moment(this.deliveredAtElement.nativeElement.value).format('YYYY-MM-DD HH:mm:ss')
    }).subscribe(response => {
      this._loader.dismiss();
      this._toast.open(`Pedido #${this.inputData.saleOrder.id} entregue`);
      this._dialogRef.close({ refresh: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  public get hasInstallments(): boolean {
    const paymentMethod = this.paymentMethods.find(pm => pm.id == this.paymentMethodElement.value);
    return paymentMethod && paymentMethod.hasInstallments;
  }
}
