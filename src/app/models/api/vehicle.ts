import { ApiModel } from "../abstraction/api-model";
import { Deposit } from "./deposit";

export interface Vehicle extends ApiModel {

    description: string;
    nickname: string;
    licensePlate: string;
    deposit: Deposit;
    createdAt: string;
    updatedAt: string;
}