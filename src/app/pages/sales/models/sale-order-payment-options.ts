import { PaymentMethod } from "../../../models/api/payment-method";

export interface SaleOrderPaymentOptions {

    paymentMethod: PaymentMethod;
    value: number;
    dueDate: string;
    payDate?: string;
}