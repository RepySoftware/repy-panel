import { PipeTransform, Pipe } from '@angular/core';
import { StockPostTypeColor } from '../enums/stock-post-type';

@Pipe({
    name: 'stockPostTypeColor'
})
export class StockPostTypeColorPipe implements PipeTransform {

    transform(value: string) {
        return StockPostTypeColor(value);
    }

}