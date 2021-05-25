import { ApiModel } from "../abstraction/api-model";

export interface EmployeeCoordinates extends ApiModel {

    name: string;
    color?: string;
    latitude: number;
    longitude: number;
    speed: number;
    coordinatesUpdatedAt: string;
}