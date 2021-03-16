import { PipeTransform, Pipe } from '@angular/core';
import { PersonTaxRegimeLabel } from '../enums/person-tax-regime';

@Pipe({
    name: 'personTaxRegime'
})
export class PersonTaxRegimePipe implements PipeTransform {

    transform(value: string) {
        return PersonTaxRegimeLabel(value);
    }

}