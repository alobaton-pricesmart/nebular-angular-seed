import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent extends NbLoginComponent {
}
