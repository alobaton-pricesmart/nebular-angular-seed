import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user/user.service';

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
            if (user) {
                this.user = user;
            } else {
                this.router.navigate(['/core/404']);
            }
        });
    }

    getFullName(): string {
        return `${this.user.name} ${this.user.lastName}`;
    }
}
