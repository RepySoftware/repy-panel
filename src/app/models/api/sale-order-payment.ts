import { ApiModel } from "../abstraction/api-model";
import { PaymentMethod } from "./payment-method";

export interface SaleOrderPayment extends ApiModel {

    paymentMethod: PaymentMethod;
    value: number;
    dueDate: string;
    payDate?: string;
    createdAt: string;
    updatedAt: string;
}