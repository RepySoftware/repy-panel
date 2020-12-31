import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Address } from "./address";

export interface Customer extends ApiModel, TimeStamps {

    documentNumber: string;
    phoneNumber: string;
    address: Address;
}