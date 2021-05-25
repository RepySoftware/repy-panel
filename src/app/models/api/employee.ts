import { ApiModel } from "../abstraction/api-model";
import { Coordinates } from "./coordinates";

export interface Employee extends ApiModel {

    name: string;
    documentNumber: string;
    email: string;
    color?: string;
    isManager: boolean;
    isAgent: boolean;
    isDriver: boolean;
    isActive: boolean;
    coordinates?: Coordinates;
    createdAt: string;
    updatedAt: string;
}