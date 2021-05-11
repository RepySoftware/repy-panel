import { SaleOrderStatus } from "../../enums/sale-order-status";
import { AddressOutput } from "./address.output";
import { SaleOrderPaymentOutput } from "./sale-order-payment.output";
import { SaleOrderProductUpdateOutput } from "./sale-order-product-update.output";

export interface SaleOrderUpdateOutput {
    id: number;
    status: SaleOrderStatus;
    companyBranchId: number;
    employeeDriverId?: number;
    personCustomerId: number;
    payments: SaleOrderPaymentOutput[];
    // deliveryAddress: AddressOutput;
    observation?: string;
    scheduledAt?: string;
    dateOfIssue: string;
    deliveredAt?: string;
    products: SaleOrderProductUpdateOutput[];
}