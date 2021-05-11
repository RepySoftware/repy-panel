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
import { Delivery } from '../../../../models/api/delivery';
import { DeliveryType } from '../../../../enums/delivery-type';
import { DeliveryService } from '../../../../services/delivery.service';
import { DeliveryFinalizeOutput } from '../../../../models/output/delivery-finalize.output';

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
  @ViewChild('paymentMethod') public paymentMethodElement: MatSelect;

  public now = moment().format('YYYY-MM-DDTHH:mm');
  public paymentMethods: PaymentMethod[] = [];

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _deliveryService: DeliveryService,
    private _paymentMethodService: PaymentMethodService,
    private _dialogRef: MatDialogRef<ConfirmDeliveryComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: ConfirmDeliveryInputData
  ) { }

  ngOnInit(): void {

    if (this.inputData.delivery.type == DeliveryType.saleOrder)
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

    if (this.inputData.delivery.type == DeliveryType.saleOrder) {

      if (!this.deliveredAtElement.nativeElement.value)
        errors.push('Data de entrega é obrigatória');

      if (!this.paymentMethodElement.value)
        errors.push('Método de pagamento é obrigatório');
    }

    if (errors.length) {
      const errorsStr = errors.join(' | ');
      this._toast.open(errorsStr, 'error');
      throw new Error(errorsStr);
    }

    let params: DeliveryFinalizeOutput = {
      id: this.inputData.delivery[this.inputData.delivery.type].id
    }

    // if (this.inputData.delivery.type == DeliveryType.saleOrder) {
    //   params = {
    //     ...params,
    //     paymentMethodId: Number(this.paymentMethodElement.value),
    //     installments: this.installmentsElement && this.installmentsElement.nativeElement.value ? Number(this.installmentsElement.nativeElement.value) : null,
    //     deliveredAt: moment(this.deliveredAtElement.nativeElement.value).toISOString()
    //   }
    // }

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

  public get hasInstallments(): boolean {
    const paymentMethod = this.paymentMethods.find(pm => pm.id == this.paymentMethodElement.value);
    return paymentMethod && paymentMethod.hasInstallments;
  }
}
