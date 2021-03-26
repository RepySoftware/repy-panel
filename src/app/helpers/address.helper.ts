import { Address } from "../models/api/address";
import { PersonSearch } from "../models/api/person-search";

export abstract class AddressHelper {

    public static format(address: Address | PersonSearch): string {

        let addressStr = '';

        if ((<Address>address).description) {

            const a: Address = <Address>address;

            addressStr += a.street;
            addressStr += a.number ? `, ${a.number}` : '';
            addressStr += a.complement ? ` (${a.complement}${a.referencePoint ? ' - ' + a.referencePoint : ''})` : '';
            addressStr += a.neighborhood ? ` - ${a.neighborhood}` : '';
            addressStr += ` - ${a.city}`;
            addressStr += ` - ${a.region}`;
        } else {
            const a: PersonSearch = <PersonSearch>address;

            addressStr += a.addressStreet;
            addressStr += a.addressNumber ? `, ${a.addressNumber}` : '';
            addressStr += a.addressComplement ? ` (${a.addressComplement}${a.addressReferencePoint ? ' - ' + a.addressReferencePoint : ''})` : '';
            addressStr += a.addressNeighborhood ? ` - ${a.addressNeighborhood}` : '';
            addressStr += ` - ${a.addressCity}`;
            addressStr += ` - ${a.addressRegion}`;
        }

        return addressStr;
    }
}