import { ApiModel } from "../abstraction/api-model";
import { CompanyBranch } from "./company-brach";

export interface Deposit extends ApiModel {

    name: string;
    companyBranch: CompanyBranch;
    createdAt: string;
    updatedAt: string;
}