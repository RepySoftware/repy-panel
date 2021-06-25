export enum SaleOrderStatus {
    WAITING_FOR_APPROVAL = 'WAITING_FOR_APPROVAL',
    PENDING = 'PENDING',
    ON_DELIVERY = 'ON_DELIVERY',
    FINISHED = 'FINISHED',
    CANCELED = 'CANCELED'
}

export function SaleOrderStatusList(): string[] {
    return Object.values(SaleOrderStatus);
}

const labels = {
    [SaleOrderStatus.WAITING_FOR_APPROVAL]: 'Aguardando aprovação',
    [SaleOrderStatus.PENDING]: 'Pendente',
    [SaleOrderStatus.ON_DELIVERY]: 'Em Entrega',
    [SaleOrderStatus.FINISHED]: 'Finalizado',
    [SaleOrderStatus.CANCELED]: 'Cancelado',
}

export function SaleOrderStatusLabel(value: SaleOrderStatus | string): string {
    return labels[value];
}

const colors = {
    [SaleOrderStatus.WAITING_FOR_APPROVAL]: 'var(--color-wisteria)',
    [SaleOrderStatus.PENDING]: 'var(--color-orange)',
    [SaleOrderStatus.ON_DELIVERY]: 'var(--color-peterriver)',
    [SaleOrderStatus.FINISHED]: 'var(--color-nephritis)',
    [SaleOrderStatus.CANCELED]: 'var(--color-pomegranate)',
}

export function SaleOrderStatusColor(value: SaleOrderStatus | string): string {
    return colors[value];
}