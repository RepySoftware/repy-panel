import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ButtonDialogCloseComponent } from './button-dialog-close/button-dialog-close.component';
import { NgxMaskModule } from 'ngx-mask';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AddressConfigComponent } from './address-config/address-config.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
    declarations: [
        DialogMessageComponent,
        CounterComponent,
        ButtonDialogCloseComponent,
        AutocompleteComponent,
        AddressConfigComponent
    ],
    imports: [
        AngularMaterialModule,
        PipesModule,
        CommonModule,
        NgxMaskModule,
        ReactiveFormsModule,
        FormsModule,
        GooglePlaceModule
    ],
    exports: [
        DialogMessageComponent,
        CounterComponent,
        ButtonDialogCloseComponent,
        NgxMaskModule,
        AutocompleteComponent,
        AddressConfigComponent
    ],
    entryComponents: [
        DialogMessageComponent
    ]
})
export class SharedModule { }