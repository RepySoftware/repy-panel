import { SalesByDateItem } from "./sales-by-date-item";

export interface SalesByDate {

    items: SalesByDateItem[];
    totalIssuedItems: number;
    totalDeliveredItems: number;
    totalIssuedSalePrice: number;
    totalDeliveredSalePrice: number;
}