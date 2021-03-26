import { Address } from "./address";

export interface CompanyBranch {
    id: number;
    name: string;
    tradeName: string;
    documentNumber: string;
    address: Address;
    isDefault: boolean;
    createdAt: string;
    updatedAt: string;
}