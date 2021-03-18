import { Address } from "./address";

export interface CompanyBranch {
    id: number;
    name: string;
    tradeName: string;
    documentNumber: string;
    address: Address;
    createdAt: string;
    updatedAt: string;
}