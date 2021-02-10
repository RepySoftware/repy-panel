export enum PersonType {
    NORMAL = 'NORMAL',
    LEGAL = 'LEGAL'
}

export function PersonTypeValues(): string[] {
    return Object.values(PersonType);
}

export function PersonTypeName(value: string): string {

    if (value == PersonType.LEGAL)
        return 'Jurídica';
    else if (value == PersonType.NORMAL)
        return 'Física';
    else
        return value;
}