export enum PersonIcmsContributorType {
    CONTRIBUTOR = 'CONTRIBUTOR',
    EXEMPT = 'EXEMPT',
    NON_CONTRIBUTOR = 'NON_CONTRIBUTOR'
}

export function PersonIcmsContributorTypeList(): string[] {
    return Object.values(PersonIcmsContributorType);
}

const labels = {
    [PersonIcmsContributorType.CONTRIBUTOR]: 'Contribuinte ICMS',
    [PersonIcmsContributorType.EXEMPT]: 'Contribuinte isento de Inscrição no Cadastro de Contribuintes',
    [PersonIcmsContributorType.NON_CONTRIBUTOR]: 'Não contribuinte'
}

export function PersonIcmsContributorTypeLabel(value: PersonIcmsContributorType | string): string {
    return labels[value];
}