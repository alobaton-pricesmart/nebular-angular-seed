import { Component } from '@angular/core';
import { NbRequestPasswordComponent } from '@nebular/auth';

@Component({
    selector: 'app-request-password',
    templateUrl: 'request-password.component.html',
    styleUrls: ['request-password.component.scss']
})
export class RequestPassworcComponent extends NbRequestPasswordComponent {
}
