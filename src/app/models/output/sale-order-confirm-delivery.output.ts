export interface SaleOrderConfirmDeliveryOutput {
    saleOrderId: number;
    deliveredAt: string;
    paymentMethodId: number;
    installments?: number;
}