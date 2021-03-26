import { ApiModel } from "../abstraction/api-model";

export interface PaymentMethod extends ApiModel {
    name: string;
    hasInstallments: boolean;
    isDefault: boolean;
}