export enum StockPostType {
    IN = 'IN',
    OUT = 'OUT',
    BALANCE = 'BALANCE'
}

export function StockPostTypeList(): string[] {
    return Object.values(StockPostType);
}

const labels = {
    [StockPostType.IN]: 'Entrada',
    [StockPostType.OUT]: 'Saída',
    [StockPostType.BALANCE]: 'Balanço'
}

export function StockPostTypeLabel(value: StockPostType | string): string {
    return labels[value];
}

const colors = {
    [StockPostType.IN]: 'var(--color-nephritis)',
    [StockPostType.OUT]: 'var(--color-peterriver)',
    [StockPostType.BALANCE]: 'var(--color-wisteria)'
}

export function StockPostTypeColor(value: StockPostType | string): string {
    return colors[value];
}