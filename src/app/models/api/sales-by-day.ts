import { SalesByDayItem } from "./sales-by-day-item";

export interface SalesByDay {

    items: SalesByDayItem[];
    totalIssuedItems: number;
    totalDeliveredItems: number;
    totalIssuedSalePrice: number;
    totalDeliveredSalePrice: number;
}