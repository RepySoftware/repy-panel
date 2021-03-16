import { PipeTransform, Pipe } from '@angular/core';
import { PersonTypeLabel } from '../enums/person-type';

@Pipe({
    name: 'personType'
})
export class PersonTypePipe implements PipeTransform {

    transform(value: string) {
        return PersonTypeLabel(value);
    }

}