import { ApiModel } from "../abstraction/api-model";

export interface CompanyBranchProductPrice extends ApiModel {
    name: string;
    salePrice: number;
    maxPriceDiscount: number;
    isDefault: boolean;
    createdAt: string;
    updatedAt: string;
}