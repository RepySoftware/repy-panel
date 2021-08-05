import { MeasurementUnit } from "../../enums/measurement-unit";
import { ApiModel } from "../abstraction/api-model";
import { ProductCategory } from "./product-category";

export interface Product extends ApiModel {

    id: number;
    companyId: number;
    category: ProductCategory;
    code: string;
    name: string;
    description: string;
    measurementUnit: MeasurementUnit;
    isGas: boolean;
    createdAt: string;
    updatedAt: string;
}