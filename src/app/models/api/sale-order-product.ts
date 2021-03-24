import { ApiModel } from "../abstraction/api-model";
import { CompanyBranchProduct } from "./company-branch-product";
import { CompanyBranchProductPrice } from "./company-branch-product-price";

export interface SaleOrderProduct extends ApiModel {
    companyBranchProduct: CompanyBranchProduct;
    companyBranchProductPrice: CompanyBranchProductPrice;
    quantity: number;
    salePrice: number;
}