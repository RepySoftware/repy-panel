import { NgModule } from '@angular/core';
import { MoneyPipe } from './money.pipe';
import { MomentDatePipe } from './moment-date.pipe';
import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { MomentCalendarPipe } from './moment-calendar.pipe';

@NgModule({
    declarations: [
        MoneyPipe,
        MomentDatePipe,
        CpfCnpjPipe,
        MomentCalendarPipe
    ],
    exports: [
        MoneyPipe,
        MomentDatePipe,
        CpfCnpjPipe,
        MomentCalendarPipe
    ]
})
export class PipesModule { }