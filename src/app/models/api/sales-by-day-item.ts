import { Product } from "./product";

export interface SalesByDayItem {

    product: Product;
    quantityIssued: number;
    quantityDelivered: number;
    totalIssuedSalePrice: number;
    totalDeliveredSalePrice: number;
}