import { ApiModel } from "../abstraction/api-model";
import { Cylinder } from "./cylinder";

export interface DeviceGasLevel extends ApiModel {

    cylinder: Cylinder;
    currentWeight: number;
    cylinderWeight?: number;
    contentWeight?: number;
    percentageToNotify?: number;
    setTare: boolean;
    lastWeightUpdate: string;
}