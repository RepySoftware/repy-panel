export enum PersonType {
    NORMAL = 'NORMAL',
    LEGAL = 'LEGAL'
}

export function PersonTypeList(): string[] {
    return Object.values(PersonType);
}

const labels = {
    [PersonType.LEGAL]: 'Jurídica',
    [PersonType.NORMAL]: 'Física',
}

export function PersonTypeLabel(value: PersonType | string): string {
    return labels[value];
}