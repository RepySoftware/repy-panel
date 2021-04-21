import { DeliveryType } from "../../enums/delivery-type";
import { Employee } from "./employee";
import { DeliveryInstruction } from "./delivery-instruction";
import { SaleOrder } from "./sale-order";

export interface Delivery {

    type: DeliveryType;
    index: number;
    employeeDriver: Employee;
    saleOrder?: SaleOrder;
    deliveryInstruction?: DeliveryInstruction;
}