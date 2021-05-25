import { ApiModel } from "../abstraction/api-model";

export interface Coordinates extends ApiModel {

    latitude: number;
    longitude: number;
    speed: number;
    createdAt: string;
    updatedAt: string;
}