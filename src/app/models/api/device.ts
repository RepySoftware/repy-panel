import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Address } from "./address";
import { DeviceGasLevel } from "./device-gas-level";
import { NotificationConfiguration } from "./notification-configuration";
import { DeviceType } from "../../enums/device-type";
import { Person } from "./person";

export interface Device extends ApiModel, TimeStamps {

    deviceKey: string;
    token: string;
    name: string;
    address: Address;
    person: Person;
    type: DeviceType;
    notificationConfiguration: NotificationConfiguration;
    isOnline: boolean;

    deviceGasLevel: DeviceGasLevel;
}