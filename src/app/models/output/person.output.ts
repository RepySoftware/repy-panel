import { PersonType } from "../../enums/person-type";
import { AddressOutput } from "./address.output";
import { PersonPhoneOutput } from "./person-phone.output";

export interface PersonOutput {
    id?: number;
    type: PersonType;
    documentNumber: string;
    name: string;
    tradeName: string;
    email: string;
    address: AddressOutput;
    isCustomer: boolean;
    isManager: boolean;
    isDriver: boolean;
    personPhones: PersonPhoneOutput[];
}