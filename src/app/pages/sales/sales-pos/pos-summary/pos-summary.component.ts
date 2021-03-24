import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { SaleOrderCreateOutput } from '../../../../models/output/sale-order-create.output';
import { LoaderService } from '../../../../services/loader.service';
import { SaleOrderService } from '../../../../services/sale-order.service';
import { ToastService } from '../../../../services/toast.service';
import { SalesPosService } from '../sales-pos.service';

@Component({
  selector: 'app-pos-summary',
  templateUrl: './pos-summary.component.html',
  styleUrls: ['./pos-summary.component.scss']
})
export class PosSummaryComponent implements OnInit {

  constructor(
    public salesPosService: SalesPosService,
    private _toast: ToastService,
    private _loader: LoaderService,
    private _saleOrderService: SaleOrderService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  public generateSaleOrder(): void {

    this.verifyErrors(true);

    const saleOrder: SaleOrderCreateOutput = {
      companyBranchId: this.salesPosService.companyBranch.id,
      employeeDriverId: this.salesPosService.employeeDriver.id,
      personCustomerId: this.salesPosService.personCustomer.id,
      paymentMethodId: this.salesPosService.paymentMethod.id,
      paymentInstallments: this.salesPosService.paymentMethod.hasInstallments ? (this.salesPosService.paymentInstallments || 1) : null,
      scheduledAt: this.salesPosService.deliverySchedule ? moment(this.salesPosService.deliverySchedule).format('YYYY-MM-DD HH:mm:ss') : null,
      products: this.salesPosService.products.map(p => {
        return {
          companyBranchProductId: p.companyBranchProduct.id,
          companyBranchProductPriceId: p.price.id,
          quantity: p.quantity,
          salePrice: p.salePriceValue
        }
      })
    }

    this._loader.show();
    this._saleOrderService.create(saleOrder).subscribe(response => {
      this._loader.dismiss();
      this._toast.open(`Pedido #${response.id} gerado com sucesso`, 'success');
      this.salesPosService.reset();
      this._router.navigate(['/sales/pos']);
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  private verifyErrors(showToast: boolean = false): void {

    const errors: string[] = [];

    if (!this.salesPosService.companyBranch)
      errors.push('Unidade da empresa não definida');

    if (!this.salesPosService.employeeDriver)
      errors.push('Entregador não definido');

    if (!this.salesPosService.personCustomer)
      errors.push('Cliente não definido');

    if (!this.salesPosService.paymentMethod)
      errors.push('Método de pagamento não definido');

    if (this.salesPosService.products.length <= 0)
      errors.push('Nenhum produto definido');

    if (errors.length > 0) {

      if (showToast)
        this._toast.open(errors.join(' | '), 'error');

      throw new Error(errors.join(' | '));
    }
  }

}
