export interface DeliveryFinalizeOutput {
    id: number;

    deliveredAt?: string;
    paymentMethodId?: number;
    installments?: number;
}