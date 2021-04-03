import { Product } from "./product";

export interface SalesByDateItem {

    product: Product;
    quantityIssued: number;
    quantityDelivered: number;
    totalIssuedSalePrice: number;
    totalDeliveredSalePrice: number;
}