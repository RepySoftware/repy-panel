import { ApiModel } from "../abstraction/api-model";
import { CompanyBranchProductPrice } from "./company-branch-product-price";
import { Product } from "./product";

export interface CompanyBranchProduct extends ApiModel {
    product: Product;
    prices: CompanyBranchProductPrice[];
    isDefault: boolean;
}