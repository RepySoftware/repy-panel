export interface SaleOrderPaymentOutput {

    id?: number;
    paymentMethodId: number;
    value: number;
    dueDate: string;
    payDate?: string;
}