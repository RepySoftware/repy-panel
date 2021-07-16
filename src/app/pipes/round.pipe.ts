import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'round'
})
export class RoundPipe implements PipeTransform {

    transform(value: number, decimals: number = 0) {
        return Number(value.toFixed(decimals));
    }

}