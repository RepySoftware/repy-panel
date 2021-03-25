import { DeliveryKanbanCard } from "./delivery-kanban-card";

export interface DeliveryKambanColumn {

    employeeDriverId?: number;
    title: string;
    cards: DeliveryKanbanCard[];
    undefinedDriver?: boolean;
}