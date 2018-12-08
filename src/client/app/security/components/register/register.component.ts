import { Component } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
    moduleId: module.id,
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent extends NbRegisterComponent {
}
