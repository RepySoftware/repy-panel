import { SaleOrderStatus } from "../../enums/sale-order-status";
import { ApiModel } from "../abstraction/api-model";
import { Address } from "./address";
import { CompanyBranch } from "./company-brach";
import { Employee } from "./employee";
import { PaymentMethod } from "./payment-method";
import { Person } from "./person";
import { SaleOrderProduct } from "./sale-order-product";

export interface SaleOrder extends ApiModel {

    companyBranch: CompanyBranch;
    employeeAgent: Employee;
    employeeDriver?: Employee;
    personCustomer: Person;
    deliveryAddress: Address;
    paymentMethod: PaymentMethod;
    totalSalePrice: number;
    paymentInstallments: number;
    status: SaleOrderStatus;
    index: number;
    observation?: string;
    showObservationToDriver: boolean;
    dateOfIssue: string;
    scheduledAt?: string;
    deliveredAt?: string;
    createdAt: string;
    updatedAt: string;
    products: SaleOrderProduct[];
}