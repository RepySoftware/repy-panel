export enum DeliveryExtraCardType {
    deliveryInstruction = 'deliveryInstruction'
}

export function DeliveryExtraCardTypeList(): string[] {
    return Object.values(DeliveryExtraCardType);
}

const labels = {
    [DeliveryExtraCardType.deliveryInstruction]: 'Instrução de entrega',
}

export function DeliveryExtraCardTypeLabel(value: DeliveryExtraCardType | string): string {
    return labels[value];
}