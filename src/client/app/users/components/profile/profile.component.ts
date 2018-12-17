import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../security/services/user/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent {

    user: any = {};

    constructor(private userService: UserService, private router: Router) {
        this.userService.getUser().subscribe((user: any) => {
            this.user = user;
        });
    }

    getFullName(): string {
        return `${this.user.name} ${this.user.lastName}`;
    }
}
