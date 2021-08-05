import { ApiModel } from "../abstraction/api-model";

export interface CompanyBranchProductPrice extends ApiModel {
    name: string;
    salePrice: number;
    isDefault: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}