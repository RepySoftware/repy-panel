import { PersonIcmsContributorType } from "../../enums/person-icms-contributor.type";
import { PersonTaxRegime } from "../../enums/person-tax-regime";
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
    isSupplier: boolean;
    taxRegime: PersonTaxRegime;
    icmsContributorType: PersonIcmsContributorType;
    stateRegistration: string;
    municipalRegistration: string;
    isActive: boolean;
    personPhones: PersonPhoneOutput[];
}