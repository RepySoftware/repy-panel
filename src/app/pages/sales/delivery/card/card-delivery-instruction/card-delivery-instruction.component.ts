import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { copyToClipboard } from '../../../../../functions/copy-to-clipboard';
import { AddressHelper } from '../../../../../helpers/address.helper';
import { Address } from '../../../../../models/api/address';
import { Delivery } from '../../../../../models/api/delivery';
import { AlertMessageService } from '../../../../../services/alert-message.service';
import { DeliveryInstructionService } from '../../../../../services/delivery-instruction.service';
import { LoaderService } from '../../../../../services/loader.service';
import { ToastService } from '../../../../../services/toast.service';
import { DeliveryFinalizeEvent } from '../../models/delivery-finalize-event';
import { DeliveryKambanColumn } from '../../models/delivery-kanban-column';

export interface CardDeliveryInstructionInputData {
  delivery: Delivery;
  column: DeliveryKambanColumn;
}

@Component({
  selector: 'app-card-delivery-instruction',
  templateUrl: './card-delivery-instruction.component.html',
  styleUrls: ['./card-delivery-instruction.component.scss']
})
export class CardDeliveryInstructionComponent implements OnInit {

  @Input('inputData') public inputData: CardDeliveryInstructionInputData;

  @Output('openDeliveryFinalize') public openDeliveryFinalizeEmitter: EventEmitter<DeliveryFinalizeEvent> = new EventEmitter();

  @Output('refreshDeliveries')
  public refreshDeliveriesEmitter: EventEmitter<void> = new EventEmitter();

  constructor(
    private _deliveryInstructionService: DeliveryInstructionService,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _alert: AlertMessageService
  ) { }

  ngOnInit(): void {
  }

  public openDeliveryFinalize(): void {
    console.log(this.inputData.delivery)
    this.openDeliveryFinalizeEmitter.emit({ delivery: this.inputData.delivery });
  }

  public deleteInstruction(): void {
    this._alert.open({
      message: 'Excluir instrução de entrega?',
      buttons: [
        {
          text: 'Cancelar',
          color: 'basic',
          closeOnClick: true
        },
        {
          text: 'Excluir',
          color: 'primary',
          onClick: () => {
            this._loader.show();
            this._deliveryInstructionService.delete(this.inputData.delivery.deliveryInstruction.id).subscribe(response => {
              this._loader.dismiss();
              this._toast.open('Excluído', 'success');
              this.refreshDeliveriesEmitter.emit();
            }, error => {
              this._loader.dismiss();
              this._toast.showHttpError(error);
            });
          }
        }
      ]
    });
  }

  public copyAddressToClipboard(address: Address): void {

    const copyResult = copyToClipboard(AddressHelper.format(address));
    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!');
    else {
      this._toast.open('Erro ao copiar :(');
    }
  }
}
