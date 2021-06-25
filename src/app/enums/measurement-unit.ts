export enum MeasurementUnit {
    UN = 'UN',
    M = 'M',
    KG = 'KG'
}

export function MeasurementUnitList(): string[] {
    return Object.values(MeasurementUnit);
}

const labels = {
    [MeasurementUnit.UN]: 'Unidade',
    [MeasurementUnit.M]: 'Metro',
    [MeasurementUnit.KG]: 'Quilograma'
}

export function MeasurementUnitLabel(value: MeasurementUnit | string): string {
    return labels[value];
}