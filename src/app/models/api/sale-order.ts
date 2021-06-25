import { SaleOrderStatus } from "../../enums/sale-order-status";
import { ApiModel } from "../abstraction/api-model";
import { Address } from "./address";
import { CompanyBranch } from "./company-brach";
import { Employee } from "./employee";
import { Person } from "./person";
import { SaleOrderPayment } from "./sale-order-payment";
import { SaleOrderProduct } from "./sale-order-product";

export interface SaleOrder extends ApiModel {

    companyBranch: CompanyBranch;
    employeeAgent: Employee;
    employeeDriver?: Employee;
    personCustomer: Person;
    deliveryAddress: Address;
    totalSalePrice: number;
    status: SaleOrderStatus;
    index: number;
    observation?: string;
    showObservationToDriver: boolean;
    source: string;
    dateOfIssue: string;
    scheduledAt?: string;
    deliveredAt?: string;
    createdAt: string;
    updatedAt: string;
    products: SaleOrderProduct[];
    payments: SaleOrderPayment[];
}