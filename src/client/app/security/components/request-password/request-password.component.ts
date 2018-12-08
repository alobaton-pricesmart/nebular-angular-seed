import { Component } from '@angular/core';
import { NbRequestPasswordComponent } from '@nebular/auth';

@Component({
    moduleId: module.id,
    selector: 'app-request-password',
    templateUrl: 'request-password.component.html',
    styleUrls: ['request-password.component.css']
})
export class RequestPassworcComponent extends NbRequestPasswordComponent {
}
