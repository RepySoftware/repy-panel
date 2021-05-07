import { ApiModel } from "../abstraction/api-model";

export interface Employee extends ApiModel {

    name: string;
    documentNumber: string;
    email: string;
    color?: string; 
    isManager: boolean;
    isAgent: boolean;
    isDriver: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}