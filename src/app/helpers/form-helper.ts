import { FormGroup } from '@angular/forms';

export abstract class FormHelper {

    public static markFormAsTouched(form: FormGroup): void{
        Object.keys(form.controls).forEach(x => form.get(x).markAsTouched);
    }
}