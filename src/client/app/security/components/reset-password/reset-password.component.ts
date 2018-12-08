import { Component } from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';

@Component({
    moduleId: module.id,
    selector: 'app-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.css']
})
export class ResetPasswordComponent extends NbResetPasswordComponent {
}
