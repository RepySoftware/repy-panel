import { Deposit } from "./deposit";
import { DepositProduct } from "./deposit-product";

export interface StockPost {

    id: number;
    deposit: Deposit;
    depositProduct: DepositProduct;
    quantity: number;
    observation?: string;
    createdAt: string;
    updatedAt: string;
}