import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ButtonDialogCloseComponent } from './button-dialog-close/button-dialog-close.component';
import { NgxMaskModule } from 'ngx-mask';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
    declarations: [
        DialogMessageComponent,
        CounterComponent,
        ButtonDialogCloseComponent,
        AutocompleteComponent
    ],
    imports: [
        AngularMaterialModule,
        PipesModule,
        CommonModule,
        NgxMaskModule
    ],
    exports: [
        DialogMessageComponent,
        CounterComponent,
        ButtonDialogCloseComponent,
        NgxMaskModule,
        AutocompleteComponent
    ],
    entryComponents: [
        DialogMessageComponent
    ]
})
export class SharedModule { }