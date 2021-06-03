export interface DepositTransferOutput {

    originDepositId: number;
    destinationDepositId: number;
    companyBranchProductId: number;
    quantity: number;
    dateOfIssue: string;
    observation?: string;
}