import { ApiModel } from "../abstraction/api-model";
import { CompanyBranchProduct } from "./company-branch-product";

export interface RelatedProduct extends ApiModel {

    referencedCompanyBranchProduct: CompanyBranchProduct;
    isDefault: boolean;
}