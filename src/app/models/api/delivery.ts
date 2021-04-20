import { DeliveryType } from "../../enums/delivery-type";
import { Employee } from "./employee";
import { EmployeeDeliveryInstruction } from "./employee-delivery-instruction";
import { SaleOrder } from "./sale-order";

export interface Delivery {

    type: DeliveryType;
    index: number;
    employeeDriver: Employee;
    saleOrder?: SaleOrder;
    deliveryInstruction?: EmployeeDeliveryInstruction;
}