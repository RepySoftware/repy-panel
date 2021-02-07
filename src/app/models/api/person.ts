import { PersonRole } from "../../enums/person-role";
import { PersonType } from "../../enums/person-type";
import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Address } from "./address";
import { PersonDevice } from "./person-device";

export interface Person extends ApiModel, TimeStamps {

    type: PersonType;
    roles: PersonRole[];
    documentNumber: string;
    name: string;
    tradeName: string;
    email: string;
    phones: string[];
    addressId: number;
    address: Address;
    personSupplier: Person;
    personDevices: PersonDevice;
}