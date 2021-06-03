import { ApiModel } from "../abstraction/api-model";
import { CompanyBranchProduct } from "./company-branch-product";
import { Deposit } from "./deposit";

export interface DepositProduct extends ApiModel {

    deposit: Deposit;
    companyBranchProduct: CompanyBranchProduct;
    quantity: number;
}