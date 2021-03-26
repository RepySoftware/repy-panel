import { PipeTransform, Pipe } from '@angular/core';
import { SaleOrderStatus, SaleOrderStatusLabel } from '../enums/sale-order-status';

@Pipe({
    name: 'saleOrderStatus'
})
export class SaleOrderStatusPipe implements PipeTransform {

    transform(value: SaleOrderStatus) {
        return SaleOrderStatusLabel(value);
    }

}