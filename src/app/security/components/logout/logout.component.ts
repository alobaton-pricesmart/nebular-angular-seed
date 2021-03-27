import { Component } from '@angular/core';
import { NbLogoutComponent } from '@nebular/auth';
import { AUTH_APP_TOKEN } from '../../security.config';

@Component({
    selector: 'app-logout',
    templateUrl: 'logout.component.html',
    styleUrls: ['logout.component.scss']
})
export class LogoutComponent extends NbLogoutComponent {
    ngOnInit() {
        super.ngOnInit();
        localStorage.removeItem(AUTH_APP_TOKEN);
    }

}
