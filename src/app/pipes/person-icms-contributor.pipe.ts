import { PipeTransform, Pipe } from '@angular/core';
import { PersonIcmsContributorTypeLabel } from '../enums/person-icms-contributor.type';

@Pipe({
    name: 'personIcmsContributorType'
})
export class PersonIcmsContributorTypePipe implements PipeTransform {

    transform(value: string) {
        return PersonIcmsContributorTypeLabel(value);
    }

}