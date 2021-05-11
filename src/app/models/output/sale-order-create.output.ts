import { SaleOrderPaymentOutput } from "./sale-order-payment.output";
import { SaleOrderProductCreateOutput } from "./sale-order-product-create.output";

export interface SaleOrderCreateOutput {
    companyBranchId: number;
    employeeDriverId?: number;
    personCustomerId: number;
    payments: SaleOrderPaymentOutput[];
    observation?: string;
    scheduledAt?: string;
    products: SaleOrderProductCreateOutput[];
}