import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
    moduleId: module.id,
    selector: 'app-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent extends NbAuthComponent {
}
