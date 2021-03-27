import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { AUTH_APP_TOKEN } from '../../security.config';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent extends NbLoginComponent {

    ngOnInit() {
        localStorage.removeItem(AUTH_APP_TOKEN);
    }
}
