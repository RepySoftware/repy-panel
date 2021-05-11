import { PaymentMethod } from "../../../models/api/payment-method";

export interface SaleOrderPaymentOptions {

    id?: number;
    paymentMethod: PaymentMethod;
    value: number;
    dueDate: string;
    payDate?: string;
}