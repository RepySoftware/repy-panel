export enum DeliveryInstructionStatus {

    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    FINISHED = 'FINISHED'
}

export function DeliveryInstructionStatusList(): string[] {
    return Object.values(DeliveryInstructionStatus);
}

const labels = {
    [DeliveryInstructionStatus.PENDING]: 'Pendente',
    [DeliveryInstructionStatus.IN_PROGRESS]: 'Em progresso',
    [DeliveryInstructionStatus.FINISHED]: 'Finalizado',
}

export function DeliveryInstructionStatusLabel(value: DeliveryInstructionStatus | string): string {
    return labels[value];
}

const colors = {
    [DeliveryInstructionStatus.PENDING]: 'var(--color-orange)',
    [DeliveryInstructionStatus.IN_PROGRESS]: 'var(--color-peterriver)',
    [DeliveryInstructionStatus.FINISHED]: 'var(--color-nephritis)'
}

export function DeliveryInstructionStatusColor(value: DeliveryInstructionStatus | string): string {
    return colors[value];
}