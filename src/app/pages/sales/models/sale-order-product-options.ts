import { CompanyBranchProduct } from "../../../models/api/company-branch-product";
import { CompanyBranchProductPrice } from "../../../models/api/company-branch-product-price";

export interface SaleOrderProductOptions {
    id?: number;
    companyBranchProduct: CompanyBranchProduct;
    price: CompanyBranchProductPrice;
    salePriceValue: number;
    quantity: number;
}