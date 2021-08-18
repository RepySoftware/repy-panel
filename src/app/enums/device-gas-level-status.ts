export enum DeviceGasLevelStatus {
    SAFE = 'SAFE',
    WARNING = 'WARNING',
    DANGER = 'DANGER'
}

const colors = {
    [DeviceGasLevelStatus.SAFE]: 'green',
    [DeviceGasLevelStatus.WARNING]: 'orange',
    [DeviceGasLevelStatus.DANGER]: 'red'
}

export function DeviceGasLevelStatusColor(status: DeviceGasLevelStatus): string {
    return colors[status];
}

const labels = {
    [DeviceGasLevelStatus.SAFE]: 'SEGURO',
    [DeviceGasLevelStatus.WARNING]: 'ATENÇÃO',
    [DeviceGasLevelStatus.DANGER]: 'RISCO'
}

export function DeviceGasLevelStatusLabel(value: DeviceGasLevelStatus | string): string {
    return labels[value];
}