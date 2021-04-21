import { PipeTransform, Pipe } from '@angular/core';
import { DeliveryInstructionStatus, DeliveryInstructionStatusColor } from '../enums/delivery-instruction-status';

@Pipe({
    name: 'deliveryInstructionStatusColor'
})
export class DeliveryInstructionStatusColorPipe implements PipeTransform {

    transform(value: DeliveryInstructionStatus) {
        return DeliveryInstructionStatusColor(value);
    }

}