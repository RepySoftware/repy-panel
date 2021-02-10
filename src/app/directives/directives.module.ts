import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlDirective } from './disable-control.directive';

@NgModule({
    declarations: [
        DisableControlDirective
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DisableControlDirective
    ],
    providers: []
})
export class DirectivesModule { }
