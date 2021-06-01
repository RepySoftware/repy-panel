import { ApiModel } from "../abstraction/api-model";
import { Coordinates } from "./coordinates";
import { Vehicle } from "./vehicle";

export interface Employee extends ApiModel {

    name: string;
    documentNumber: string;
    email: string;
    color?: string;
    vehicle?: Vehicle;
    isManager: boolean;
    isAgent: boolean;
    isDriver: boolean;
    isActive: boolean;
    coordinates?: Coordinates;
    createdAt: string;
    updatedAt: string;
}