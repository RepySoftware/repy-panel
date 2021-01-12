import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Address } from "./address";
import { Supplier } from "./supplier";
import { DeviceGasLevel } from "./device-gas-level";
import { NotificationConfiguration } from "./notification-configuration";
import { DeviceType } from "../../enums/device-type";

export interface Device extends ApiModel, TimeStamps {

    deviceKey: string;
    token: string;
    name: string;
    address: Address;
    supplier: Supplier;
    type: DeviceType;
    notificationConfiguration: NotificationConfiguration;

    deviceGasLevel?: DeviceGasLevel;
}