export enum DeviceType {
    GAS_LEVEL = 'GAS_LEVEL'
}

export function DeviceTypeList(): string[] {
    return Object.values(DeviceType);
}

const labels = {
    [DeviceType.GAS_LEVEL]: 'Medidor do nível do gás'
}

export function DeviceTypeLabel(value: DeviceType | string): string {
    return labels[value];
}