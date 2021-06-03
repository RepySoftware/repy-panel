export interface StockPostOutput {
    depositId: number;
    companyBranchProductId: number;
    quantity: number;
    observation?: string;
    dateOfIssue: string;
}