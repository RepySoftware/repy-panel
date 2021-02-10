import { PersonType } from "../../enums/person-type";
import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Address } from "./address";
import { Device } from "./device";
import { PersonPhone } from "./person-phone";

export interface Person extends ApiModel, TimeStamps {

    type: PersonType;
    documentNumber: string;
    name: string;
    tradeName: string;
    email: string;
    phones: PersonPhone[];
    address: Address;
    isSupplier: boolean;
    isCustomer: boolean;
    isManager: boolean;
    isDriver: boolean;
    devices: Device;
}