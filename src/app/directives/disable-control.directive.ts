import { Directive, Input, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[disableControl]'
})
export class DisableControlDirective {

    @Input() set disableControl(condition: boolean) {
        const action = condition ? 'disable' : 'enable';
        setTimeout(() => this.ngControl.control[action]());
    }

    constructor(@Self() private ngControl: NgControl) {
    }

}