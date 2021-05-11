import { SaleOrderPaymentOutput } from "./sale-order-payment.output";

export interface DeliveryFinalizeOutput {
    id: number;

    deliveredAt?: string;
    payments?: SaleOrderPaymentOutput[];
}