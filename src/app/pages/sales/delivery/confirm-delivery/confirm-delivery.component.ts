import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaleOrder } from '../../../../models/api/sale-order';
import { LoaderService } from '../../../../services/loader.service';
import { ToastService } from '../../../../services/toast.service';
import * as moment from 'moment';
import { PaymentMethod } from '../../../../models/api/payment-method';
import { PaymentMethodService } from '../../../../services/payment-method.service';
import { MatSelect } from '@angular/material/select';
import { Delivery } from '../../../../models/api/delivery';
import { DeliveryType } from '../../../../enums/delivery-type';
import { DeliveryService } from '../../../../services/delivery.service';
import { DeliveryFinalizeOutput } from '../../../../models/output/delivery-finalize.output';
import { SaleOrderPaymentOptions } from '../../models/sale-order-payment-options';
import { AlertMessageService } from '../../../../services/alert-message.service';
import { SaleOrderPaymentFormComponent, SaleOrderPaymentFormInputData } from '../../sale-orders/sale-order-form/sale-order-payment-form/sale-order-payment-form.component';
import { StringHelper } from '../../../../helpers/string-helper';

export interface ConfirmDeliveryInputData {
  delivery: Delivery;
}

@Component({
  selector: 'app-confirm-delivery',
  templateUrl: './confirm-delivery.component.html',
  styleUrls: ['./confirm-delivery.component.scss']
})
export class ConfirmDeliveryComponent implements OnInit {

  @ViewChild('deliveredAt') public deliveredAtElement: ElementRef;

  public now = moment().format('YYYY-MM-DDTHH:mm');
  public paymentMethods: PaymentMethod[] = [];

  public payments: SaleOrderPaymentOptions[] = [];

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _deliveryService: DeliveryService,
    private _paymentMethodService: PaymentMethodService,
    private _dialogRef: MatDialogRef<ConfirmDeliveryComponent>,
    private _alert: AlertMessageService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public inputData: ConfirmDeliveryInputData
  ) { }

  ngOnInit(): void {

    if (this.inputData.delivery.type == DeliveryType.saleOrder) {
      this.getPaymentMethods().then(() => {
        this.payments = this.inputData.delivery.saleOrder.payments.map(p => {
          return {
            id: p.id,
            paymentMethod: p.paymentMethod,
            value: p.value,
            dueDate: p.dueDate,
            payDate: p.payDate
          }
        });
      });
    }
  }

  private getPaymentMethods(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._loader.show();
      this._paymentMethodService.getAll().subscribe(response => {
        this._loader.dismiss();
        this.paymentMethods = response;
        resolve();
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      });
    });
  }

  public cancel(): void {
    this._dialogRef.close();
  }

  public confirm(): void {
    const errors = [];

    if (this.inputData.delivery.type == DeliveryType.saleOrder) {

      if (!this.deliveredAtElement.nativeElement.value)
        errors.push('Data de entrega é obrigatória');

      if (!this.payments.length)
        errors.push('Nenhum pagamento informado');

      if (this.paymentsTotalPrice != this.productsTotalPrice)
        errors.push('Valor de pagamento é diferente do valor total da venda');
    }

    if (errors.length) {
      const errorsStr = errors.join(' | ');
      this._toast.open(errorsStr, 'error');
      throw new Error(errorsStr);
    }

    let params: DeliveryFinalizeOutput = {
      id: this.inputData.delivery[this.inputData.delivery.type].id
    }

    if (this.inputData.delivery.type == DeliveryType.saleOrder) {
      params.deliveredAt = this.deliveredAtElement.nativeElement.value ? moment(this.deliveredAtElement.nativeElement.value).toISOString() : null

      params.payments = this.payments.map(p => {
        return {
          id: p.id,
          paymentMethodId: p.paymentMethod.id,
          value: p.value,
          dueDate: p.dueDate,
          payDate: p.payDate
        }
      });
    }

    this._loader.show();
    this._deliveryService.finalize(params, this.inputData.delivery.type).subscribe(response => {
      this._loader.dismiss();
      this._toast.open(`Finalizado`, 'success');
      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  public openPaymentForm(index?: number): void {

    const payment = index !== undefined && index !== null ? this.payments[index] : null;

    const dialog = this._dialog.open(SaleOrderPaymentFormComponent, {
      width: '50%',
      data: { payment } as SaleOrderPaymentFormInputData
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.payment) {
        if (index !== undefined && index != null)
          this.payments[index] = result.payment;
        else
          this.payments.push(result.payment);
      }
    });
  }

  public removePayment(index: number): void {

    const payment = this.payments[index];

    this._alert.open({
      message: `Excluir pagamento <strong>${payment.paymentMethod.name} ${StringHelper.toMoney(payment.value)}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          color: 'basic'
        },
        {
          text: 'Excluir',
          color: 'warn',
          onClick: () => this.payments.splice(index, 1)
        }
      ]
    });
  }

  public get productsTotalPrice(): number {
    return this.inputData.delivery.saleOrder.products
      .map(p => p.quantity * p.salePrice)
      .reduce((a, b) => a + b, 0);
  }

  public get paymentsTotalPrice(): number {
    return this.payments
      .map(p => p.value)
      .reduce((a, b) => a + b, 0);
  }

}
