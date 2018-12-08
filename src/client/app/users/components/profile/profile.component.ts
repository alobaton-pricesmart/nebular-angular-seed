import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

    user: any = {};

    constructor(private authService: NbAuthService, private router: Router) {
    }

    ngOnInit() {
        this.authService.getToken().subscribe(token => {
            if (token.isValid()) {
                this.user = token.getPayload();
            } else {
                this.router.navigate(['/core/404']);
            }
        }, err => {
            this.router.navigate(['/core/404']);
        });
    }

    getFullName(): string {
        return `${this.user.name} ${this.user.lastName}`;
    }
}
