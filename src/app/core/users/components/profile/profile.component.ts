import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { MenuService } from '../../../../shared/services/menu/menu.service';
import { UserService } from '../../../../security/services/user/user.service';

const PROFILE_ITEMS: NbMenuItem[] = [
    {
        title: 'general.general',
        group: true,
    },
    {
        title: 'users.view.basicInformation',
        link: '/core/users/profile/basic-information',
        home: true,
    }
];

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
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
