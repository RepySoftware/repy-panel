export enum DeliveryType {
    deliveryInstruction = 'deliveryInstruction',
    saleOrder = 'deliveryInstruction'
}

export function DeliveryTypeList(): string[] {
    return Object.values(DeliveryType);
}

const labels = {
    [DeliveryType.deliveryInstruction]: 'Instrução de entrega',
    [DeliveryType.saleOrder]: 'Pedido'
}

export function DeliveryTypeLabel(value: DeliveryType | string): string {
    return labels[value];
}