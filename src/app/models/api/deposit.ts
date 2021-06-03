import { ApiModel } from "../abstraction/api-model";
import { CompanyBranch } from "./company-brach";
import { DepositProduct } from "./deposit-product";

export interface Deposit extends ApiModel {

    name: string;
    companyBranch: CompanyBranch;
    createdAt: string;
    updatedAt: string;
    products: DepositProduct[];
}