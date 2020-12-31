import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'money'
})
export class MoneyPipe implements PipeTransform {

    transform(value: number) {
        if (value !== undefined && value !== null)
            return `R$ ${value.toFixed(2).replace('.', ',')}`;
        else
            return '-';
    }

}