import { PipeTransform, Pipe } from '@angular/core';
import { DeliveryExtraCardType, DeliveryExtraCardTypeLabel } from '../enums/delivery-extra-card-type';

@Pipe({
    name: 'deliveryExtraCardType'
})
export class DeliveryExtraCardTypePipe implements PipeTransform {

    transform(value: DeliveryExtraCardType) {
        return DeliveryExtraCardTypeLabel(value);
    }

}