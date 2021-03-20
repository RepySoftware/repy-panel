import { PersonIcmsContributorType } from "../../enums/person-icms-contributor.type";
import { PersonTaxRegime } from "../../enums/person-tax-regime";
import { PersonType } from "../../enums/person-type";
import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Address } from "./address";
import { Device } from "./device";
import { PersonPhone } from "./person-phone";

export interface Person extends ApiModel, TimeStamps {

    id: number;
    type: PersonType;
    documentNumber: string;
    name: string;
    tradeName: string;
    email: string;
    phones: PersonPhone[];
    address: Address;
    isSupplier: boolean;
    isCustomer: boolean;
    taxRegime: PersonTaxRegime;
    icmsContributorType: PersonIcmsContributorType;
    stateRegistration: string;
    municipalRegistration: string;
    isGasCustomer: boolean;
    isActive: boolean;
    devices: Device[];
    createdAt: string;
    updatedAt: string;
}