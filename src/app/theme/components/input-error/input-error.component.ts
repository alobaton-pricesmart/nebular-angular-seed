import { Component, Input, Host, SkipSelf } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html'
})
export class InputErrorComponent {
  @Input() controlName: string;
  @Input() errorKeys: string[];

  constructor(
    @Host() @SkipSelf() private form: FormGroupDirective
  ) {
  }

  get isInvalid() {
    const control = this.form.form.get(this.controlName);
    let isInvalid = (control.dirty || control.touched || this.form.submitted) && control.invalid;
    // Validamos el conjunto de error keys.
    this.errorKeys.forEach((errorKey: string) => {
      isInvalid = isInvalid && control.hasError(errorKey);
    });
    return isInvalid;
  }
}
