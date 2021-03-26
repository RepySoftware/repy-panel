import { PipeTransform, Pipe } from '@angular/core';
import { SaleOrderStatus, SaleOrderStatusColor } from '../enums/sale-order-status';

@Pipe({
    name: 'saleOrderStatusColor'
})
export class SaleOrderStatusColorPipe implements PipeTransform {

    transform(value: SaleOrderStatus) {
        return SaleOrderStatusColor(value);
    }

}