import { PipeTransform, Pipe } from '@angular/core';
import { DeliveryInstructionStatus, DeliveryInstructionStatusLabel } from '../enums/delivery-instruction-status';

@Pipe({
    name: 'deliveryInstructionStatus'
})
export class DeliveryInstructionStatusPipe implements PipeTransform {

    transform(value: DeliveryInstructionStatus) {
        return DeliveryInstructionStatusLabel(value);
    }

}