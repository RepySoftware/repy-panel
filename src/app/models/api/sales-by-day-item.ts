import { Product } from "./product";

export interface SalesByDayItem {

    product: Product;
    quantity: number;
    totalSalePrice: number;
}