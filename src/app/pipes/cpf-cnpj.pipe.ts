import { PipeTransform, Pipe } from '@angular/core';
import { StringHelper } from '../helpers/string-helper';

@Pipe({
    name: 'cpfCnpj'
})
export class CpfCnpjPipe implements PipeTransform {

    transform(value: string) {
        return StringHelper.toCpfCnpj(value);
    }

}