import { ApiModel } from "../abstraction/api-model";

export interface DeviceGasLevelHistoryRead extends ApiModel {

    cylinderWeight: number;
    contentWeight: number;
    weight: number;
    gasWeight: number;
    percentage: number;
    createdAt: string;
    updatedAt: string;
}