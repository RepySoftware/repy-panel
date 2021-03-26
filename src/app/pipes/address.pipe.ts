import { PipeTransform, Pipe } from '@angular/core';
import { AddressHelper } from '../helpers/address.helper';
import { Address } from '../models/api/address';
import { PersonSearch } from '../models/api/person-search';

@Pipe({
    name: 'address'
})
export class AddressPipe implements PipeTransform {

    transform(value: Address | PersonSearch) {
        return AddressHelper.format(value);
    }

}