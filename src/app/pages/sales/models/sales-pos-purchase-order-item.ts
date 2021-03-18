import { CompanyBranchProduct } from "../../../models/api/company-branch-product";
import { CompanyBranchProductPrice } from "../../../models/api/company-branch-product-price";

export interface SalesPosPurchaseOrderProduct {
    companyBranchProduct: CompanyBranchProduct;
    price: CompanyBranchProductPrice
    quantity: number;
}