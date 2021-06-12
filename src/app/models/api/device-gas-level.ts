import { DeviceGasLevelStatus } from "../../enums/device-gas-level-status";
import { ApiModel } from "../abstraction/api-model";
import { Cylinder } from "./cylinder";
import { Device } from "./device";

export interface DeviceGasLevel extends ApiModel {

    cylinder: Cylinder;
    currentWeight: number;
    cylinderWeight?: number;
    contentWeight?: number;
    percentageToNotify?: number;
    setTare: boolean;
    lastWeightUpdate: string;
    percentage: number;
    status: DeviceGasLevelStatus;
}