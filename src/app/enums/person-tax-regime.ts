export enum PersonTaxRegime {
    UNDEFINED = 'UNDEFINED',
    NATIONAL_SIMPLE = 'NATIONAL_SIMPLE',
    NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT = 'NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT',
    NORMAL = 'NORMAL'
}

export function PersonTaxRegimeList(): string[] {
    return Object.values(PersonTaxRegime);
}

const labels = {
    [PersonTaxRegime.UNDEFINED]: 'Não definido',
    [PersonTaxRegime.NATIONAL_SIMPLE]: 'Simples nacional',
    [PersonTaxRegime.NATIONAL_SIMPLE_EXCESS_GROSS_REVENUE_SUB_LIMIT]: 'Simples nacional - Excesso de sublimite de receita bruta',
    [PersonTaxRegime.NORMAL]: 'Regime normal'
}

export function PersonTaxRegimeLabel(value: PersonTaxRegime | string): string {
    return labels[value];
}