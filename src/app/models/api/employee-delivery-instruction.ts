import { EmployeeDeliveryInstructionStatus } from "../../enums/delivery-instruction-status";
import { ApiModel } from "../abstraction/api-model";
import { DeliveryInstruction } from './delivery-instruction';
import { Employee } from "./employee";

export interface EmployeeDeliveryInstruction extends ApiModel {

    deliveryInstruction: DeliveryInstruction;
    employee: Employee
    status: EmployeeDeliveryInstructionStatus;
    index: number;
    startedAt?: string;
    finishedAt?: string;
    createdAt: string;
    updatedAt: string;
}