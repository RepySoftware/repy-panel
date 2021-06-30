import { PipeTransform, Pipe } from '@angular/core';
import { StockPostTypeLabel } from '../enums/stock-post-type';

@Pipe({
    name: 'stockPostType'
})
export class StockPostTypePipe implements PipeTransform {

    transform(value: string) {
        return StockPostTypeLabel(value);
    }

}