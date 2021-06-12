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