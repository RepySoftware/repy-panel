import { ApiModel } from "../abstraction/api-model";

export interface CompanyBranchProductPrice extends ApiModel {
    name: string;
    salePrice: number;
    maxPriceDiscount: number;
    createdAt: string;
    updatedAt: string;
}