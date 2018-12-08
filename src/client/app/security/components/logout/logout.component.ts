import { Component } from '@angular/core';
import { NbLogoutComponent } from '@nebular/auth';

@Component({
    moduleId: module.id,
    selector: 'app-logout',
    templateUrl: 'logout.component.html',
    styleUrls: ['logout.component.css']
})
export class LogoutComponent extends NbLogoutComponent {
}
