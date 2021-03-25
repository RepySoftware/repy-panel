import { SaleOrder } from "../../../../models/api/sale-order";

export interface DeliveryKanbanCard {

    saleOrderId: number;
    saleOrder: SaleOrder;
}