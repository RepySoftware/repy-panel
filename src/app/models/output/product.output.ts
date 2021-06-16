import { MeasurementUnit } from "../../enums/measurement-unit";

export interface ProductOutput {

    id?: number;
    categoryId: number;
    code: string;
    name: string;
    description: string;
    measurementUnit: MeasurementUnit;
    isGas: boolean;
}