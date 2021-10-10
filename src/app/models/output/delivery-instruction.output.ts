import { AddressOutput } from "./address.output";

export interface DeliveryInstructionOutput {
    employeeDriverId: number;
    description: string;
    index?: number;
    address?: AddressOutput;
    checkableByDriver: boolean;
    firstPosition: boolean;
}