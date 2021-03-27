import { SaleOrderProductCreateOutput } from "./sale-order-product-create.output";

export interface SaleOrderCreateOutput {
    companyBranchId: number;
    employeeDriverId?: number;
    personCustomerId: number;
    paymentMethodId: number;
    paymentInstallments: number;
    observation?: string;
    scheduledAt?: string;
    products: SaleOrderProductCreateOutput[];
}