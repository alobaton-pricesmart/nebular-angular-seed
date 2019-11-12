import { FormGroup, FormControl, FormArray } from "@angular/forms";

export class FormComponent {

    public validateForm(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateForm(control);
            } else if (control instanceof FormArray) {
                if (control.controls.length > 0) {
                    for (const item of control.controls) {
                        if (item instanceof FormControl) {
                            item.markAsTouched({ onlySelf: true });
                        } else if (item instanceof FormGroup) {
                            this.validateForm(item);
                        }
                    }
                } else {
                    control.markAsTouched({ onlySelf: true });
                }
            }
        });
    }

    public isInvalid(form: FormGroup, controlName: string, errorKeys?: string[]): boolean {
        const control = form.get(controlName);
        let isInvalid = (control.dirty || control.touched) && control.invalid;
        // Validamos el conjunto de error keys.
        errorKeys.forEach((errorKey: string) => {
            isInvalid = isInvalid && control.hasError(errorKey);
        });
        return isInvalid;
    }

    public getStatus(form: FormGroup, controlName: string) {
        const control = form.get(controlName);
        return control.dirty || control.touched ?
            (control.invalid ? 'danger' : 'success') : '';
    }

    public isPristine(form: FormGroup) {
        let pristine = true;
        Object.values(form.controls).forEach(control => pristine = pristine && control.pristine);
        return pristine;
    }
}