import { SalesByDayItem } from "./sales-by-day-item";

export interface SalesByDay {

    items: SalesByDayItem[];
    totalItems: number;
    totalSalePrice: number;
}