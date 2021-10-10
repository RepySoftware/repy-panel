import { DeliveryInstructionStatus } from "../../enums/delivery-instruction-status";
import { ApiModel } from "../abstraction/api-model";
import { Address } from "./address";
import { Employee } from "./employee";

export interface DeliveryInstruction extends ApiModel {

    employee: Employee
    description: string;
    status: DeliveryInstructionStatus;
    index: number;
    address?: Address;
    startedAt?: string;
    finishedAt?: string;
    createdAt: string;
    updatedAt: string;
}