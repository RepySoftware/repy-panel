import { Delivery } from "../../../../models/api/delivery";
import { DeliveryExtraCard } from "./delivery-extra-card";

export interface DeliveryKanbanCard {

    delivery?: Delivery;
    extra?: DeliveryExtraCard;

    copyObservation?: boolean;
}