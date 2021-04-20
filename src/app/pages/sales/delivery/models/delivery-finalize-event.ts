import { Delivery } from "../../../../models/api/delivery";

export interface DeliveryFinalizeEvent {
    delivery: Delivery;
}