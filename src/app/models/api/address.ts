import { ApiModel } from "../abstraction/api-model";

export interface Address extends ApiModel {

    description: string;
    zipCode: string;
    city: string;
    region: string;
    country: string;
    complement: string;
    referencePoint: string;
    latitude: number;
    longitude: number;
}