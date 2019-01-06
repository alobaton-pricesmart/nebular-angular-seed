import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user/user.service';
import { NbMenuItem } from '@nebular/theme';
import { MenuService } from '../../../shared/services/menu/menu.service';

const PROFILE_ITEMS: NbMenuItem[] = [
    {
        title: 'users.view.basicInformation',
        icon: 'fas fa-user',
        link: '/core/users/profile/basic-information',
        home: true,
    }
]

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
    profileMenu = PROFILE_ITEMS;

    user: any = {};

    constructor(private userService: UserService, private router: Router, private menu: MenuService) {
        this.userService.getUser().subscribe((user: any) => {
            if (user) {
                this.user = user;
            } else {
                // this.router.navigate(['/core/404']);
            }
        });
    }

    ngOnInit() {
        this.menu.translateMenuItems(this.profileMenu);
    }

    getFullName(): string {
        return `${this.user.name} ${this.user.lastName}`;
    }
}
