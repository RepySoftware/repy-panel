import { NgModule } from '@angular/core';
import { MoneyPipe } from './money.pipe';
import { MomentDatePipe } from './moment-date.pipe';
import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { MomentCalendarPipe } from './moment-calendar.pipe';
import { PersonTypePipe } from './person-type.pipe';
import { PersonTaxRegimePipe } from './person-tax-regime.pipe';
import { PersonIcmsContributorTypePipe } from './person-icms-contributor.pipe';
import { MapPipe } from './map.pipe';
import { DeliveryInstructionStatusPipe } from './delivery-instruction-status.pipe';
import { SaleOrderStatusColorPipe } from './sale-order-status-color.pipe';
import { AddressPipe } from './address.pipe';
import { DeliveryInstructionStatusColorPipe } from './delivery-instruction-status-color.pipe';
import { SaleOrderStatusPipe } from './sale-order-status.pipe';
import { DeliveryExtraCardTypePipe } from './delivery-extra-card-type.pipe';

@NgModule({
    declarations: [
        MoneyPipe,
        MomentDatePipe,
        CpfCnpjPipe,
        MomentCalendarPipe,
        PersonTypePipe,
        PersonTaxRegimePipe,
        PersonIcmsContributorTypePipe,
        MapPipe,
        SaleOrderStatusColorPipe,
        SaleOrderStatusPipe,
        AddressPipe,
        DeliveryInstructionStatusColorPipe,
        DeliveryInstructionStatusPipe,
        DeliveryExtraCardTypePipe
    ],
    exports: [
        MoneyPipe,
        MomentDatePipe,
        CpfCnpjPipe,
        MomentCalendarPipe,
        PersonTypePipe,
        PersonTaxRegimePipe,
        PersonIcmsContributorTypePipe,
        MapPipe,
        SaleOrderStatusColorPipe,
        SaleOrderStatusPipe,
        AddressPipe,
        DeliveryInstructionStatusColorPipe,
        DeliveryInstructionStatusPipe,
        DeliveryExtraCardTypePipe
    ]
})
export class PipesModule { }