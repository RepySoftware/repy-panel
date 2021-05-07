import { DeliveryKanbanCard } from "./delivery-kanban-card";

export interface DeliveryKambanColumn {

    employeeDriverId?: number;
    title: string;
    color?: string;
    cards: DeliveryKanbanCard[];
    defaultColumn?: boolean;
}