import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Delivery } from '../../../../../models/api/delivery';
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

  constructor() { }

  ngOnInit(): void {
  }

  public openDeliveryFinalize(): void {
    console.log(this.inputData.delivery)
    this.openDeliveryFinalizeEmitter.emit({ delivery: this.inputData.delivery });
  }
}
