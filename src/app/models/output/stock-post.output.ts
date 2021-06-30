import { StockPostType } from "../../enums/stock-post-type";

export interface StockPostOutput {
    depositId: number;
    companyBranchProductId: number;
    type: StockPostType;
    quantity?: number;
    observation?: string;
    dateOfIssue: string;
}