import { Component } from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';

@Component({
    selector: 'app-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.scss']
})
export class ResetPasswordComponent extends NbResetPasswordComponent {
}
