import { NgModule } from '@angular/core';
import { MoneyPipe } from './money.pipe';
import { MomentDatePipe } from './moment-date.pipe';
import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { MomentCalendarPipe } from './moment-calendar.pipe';
import { PersonTypePipe } from './person-type.pipe';
import { PersonTaxRegimePipe } from './person-tax-regime.pipe';
import { PersonIcmsContributorTypePipe } from './person-icms-contributor.pipe';

@NgModule({
    declarations: [
        MoneyPipe,
        MomentDatePipe,
        CpfCnpjPipe,
        MomentCalendarPipe,
        PersonTypePipe,
        PersonTaxRegimePipe,
        PersonIcmsContributorTypePipe
    ],
    exports: [
        MoneyPipe,
        MomentDatePipe,
        CpfCnpjPipe,
        MomentCalendarPipe,
        PersonTypePipe,
        PersonTaxRegimePipe,
        PersonIcmsContributorTypePipe
    ]
})
export class PipesModule { }