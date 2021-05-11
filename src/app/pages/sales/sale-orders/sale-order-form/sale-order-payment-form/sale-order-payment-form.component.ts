import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentMethod } from '../../../../../models/api/payment-method';
import { SaleOrderPayment } from '../../../../../models/api/sale-order-payment';
import { LoaderService } from '../../../../../services/loader.service';
import { PaymentMethodService } from '../../../../../services/payment-method.service';
import { ToastService } from '../../../../../services/toast.service';
import { SaleOrderPaymentOptions } from '../../../models/sale-order-payment-options';

export interface SaleOrderPaymentFormInputData {
  payment: SaleOrderPayment
}

@Component({
  selector: 'app-sale-order-payment-form',
  templateUrl: './sale-order-payment-form.component.html',
  styleUrls: ['./sale-order-payment-form.component.scss']
})
export class SaleOrderPaymentFormComponent implements OnInit, AfterViewInit {

  public paymentForm: FormGroup;

  public paymentMethods: PaymentMethod[] = [];

  constructor(
    private _paymentMethodService: PaymentMethodService,
    private _toast: ToastService,
    private _loader: LoaderService,
    private _dialogRef: MatDialogRef<SaleOrderPaymentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: SaleOrderPaymentFormInputData
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getPaymentMethods();
  }

  ngAfterViewInit(): void {
    if (this.inputData.payment)
      this.setFormValues();
  }

  private initForm(): void {
    this.paymentForm = new FormGroup({
      paymentMethod: new FormControl(null, Validators.required),
      value: new FormControl(null, [Validators.required, Validators.min(0)]),
      dueDate: new FormControl(null, Validators.required),
      payDate: new FormControl(null, Validators.required),
    });
  }

  public setFormValues(): void {
    this.paymentForm.get('paymentMethod').setValue(this.inputData.payment.paymentMethod.id);
    this.paymentForm.get('value').setValue(this.inputData.payment.value);
    this.paymentForm.get('dueDate').setValue(this.inputData.payment.dueDate);
    this.paymentForm.get('payDate').setValue(this.inputData.payment.payDate);
  }

  private getPaymentMethods(): void {
    this._paymentMethodService.getAll().subscribe(response => {
      this.paymentMethods = response;
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  public save(): void {

    if (!this.paymentForm.valid) {
      this._toast.open('Campos inválidos', 'error');
      this.paymentForm.markAllAsTouched();
      throw new Error('Invalid form');
    }

    const payment: SaleOrderPaymentOptions = {
      id: this.inputData.payment.id,
      paymentMethod: this.paymentMethods.find(x => x.id == this.paymentForm.get('paymentMethod').value),
      value: this.paymentForm.get('value').value,
      dueDate: this.paymentForm.get('dueDate').value,
      payDate: this.paymentForm.get('payDate').value,
    }

    this._dialogRef.close({ payment });
  }
}
