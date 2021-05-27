import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DeliveryType } from '../../../../../enums/delivery-type';
import { copyToClipboard } from '../../../../../functions/copy-to-clipboard';
import { AddressHelper } from '../../../../../helpers/address.helper';
import { StringHelper } from '../../../../../helpers/string-helper';
import { Address } from '../../../../../models/api/address';
import { Delivery } from '../../../../../models/api/delivery';
import { SaleOrder } from '../../../../../models/api/sale-order';
import { ToastService } from '../../../../../services/toast.service';
import { PersonFormComponent, PersonFormInputData } from '../../../../persons/person-form/person-form.component';
import { SaleOrderFormComponent, SaleOrderFormInputData } from '../../../sale-orders/sale-order-form/sale-order-form.component';
import { DeliveryFinalizeEvent } from '../../models/delivery-finalize-event';
import { DeliveryKambanColumn } from '../../models/delivery-kanban-column';
import { DeliverySaleOrderUpdateShowObservationToDriverEvent } from '../../models/delivery-sale-order-update-show-observation-to-driver';

export interface CardSaleOrderInputData {
  delivery: Delivery;
  column: DeliveryKambanColumn;
}

@Component({
  selector: 'app-card-sale-order',
  templateUrl: './card-sale-order.component.html',
  styleUrls: ['./card-sale-order.component.scss']
})
export class CardSaleOrderComponent implements OnInit {

  @Input('inputData') public inputData: CardSaleOrderInputData;

  @Output('openDeliveryFinalize')
  public openDeliveryFinalizeEmitter: EventEmitter<DeliveryFinalizeEvent> = new EventEmitter();

  @Output('updateShowObservationToDriver')
  public updateShowObservationToDriverEmitter: EventEmitter<DeliverySaleOrderUpdateShowObservationToDriverEvent> = new EventEmitter();

  @Output('refreshDeliveries')
  public refreshDeliveriesEmitter: EventEmitter<void> = new EventEmitter();

  constructor(
    private _toast: ToastService,
    private _sanitizer: DomSanitizer,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public copySaleOrderToClipboard(saleOrder: SaleOrder): void {

    let content = '';
    content += `${saleOrder.personCustomer.name || ''}`;
    content += `\n${AddressHelper.format(saleOrder.deliveryAddress)}`;
    content += `\n${saleOrder.products.map(p => `- ${p.quantity}x ${p.companyBranchProduct.product.name} - ${StringHelper.toMoney(p.salePrice)}`).join('\n')}`
    content += `\nTotal: *${StringHelper.toMoney(saleOrder.totalSalePrice)}*`;

    if (saleOrder.showObservationToDriver) {
      content += `\n_Obs: ${saleOrder.observation}_`;
    }

    const copyResult = copyToClipboard(content);

    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!', 'success');
    else {
      this._toast.open('Erro ao copiar :(', 'error');
    }
  }

  public getSaleOrderProductsFormatted(saleOrder: SaleOrder): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(
      saleOrder.products.map(p => `- ${p.quantity}x ${p.companyBranchProduct.product.name}`).join('<br>')
    );
  }

  public copyAddressToClipboard(address: Address): void {

    const copyResult = copyToClipboard(AddressHelper.format(address));
    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!');
    else {
      this._toast.open('Erro ao copiar :(');
    }
  }

  public openDeliveryFinalize(): void {
    this.openDeliveryFinalizeEmitter.emit({ delivery: this.inputData.delivery });
  }

  public updateShowObservationToDriver(value: boolean): void {
    this.updateShowObservationToDriverEmitter.emit({ saleOrderId: this.inputData.delivery.saleOrder.id, value });
  }

  public openSaleOrderForm(): void {

    const data: SaleOrderFormInputData = { saleOrderId: this.inputData.delivery.saleOrder.id };

    const dialog = this._dialog.open(SaleOrderFormComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.refreshDeliveriesEmitter.emit();
      }
    });
  }

  public openPersonForm(): void {

    const data: PersonFormInputData = { personId: this.inputData.delivery.saleOrder.personCustomer.id };

    const dialog = this._dialog.open(PersonFormComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.refreshDeliveriesEmitter.emit();
      }
    });
  }

}
