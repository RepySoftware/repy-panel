import { PipeTransform, Pipe } from '@angular/core';
import { StringHelper } from '../helpers/string-helper';

@Pipe({
    name: 'money'
})
export class MoneyPipe implements PipeTransform {

    transform(value: number) {
        if (value !== undefined && value !== null)
            return StringHelper.toMoney(value);
        else
            return '-';
    }

}