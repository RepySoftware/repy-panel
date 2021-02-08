import { PipeTransform, Pipe } from '@angular/core';
import { PersonTypeName } from '../enums/person-type';

@Pipe({
    name: 'personType'
})
export class PersonTypePipe implements PipeTransform {

    transform(value: string) {
        return PersonTypeName(value);
    }

}