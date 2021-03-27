import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AUTH_APP_TOKEN } from '../../security.config';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent implements OnInit, OnDestroy {

    constructor(
        nbAuthService: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) options: {}, cd: ChangeDetectorRef,
        router: Router,
        private readonly authService: AuthService) {
        super(nbAuthService, options, cd, router);
    }

    ngOnInit() {
        this.authService.postTokenClientCredentials().subscribe((response: any) => {
            localStorage.setItem(AUTH_APP_TOKEN, JSON.stringify(response));
        });
    }

    ngOnDestroy() {
        localStorage.removeItem(AUTH_APP_TOKEN);
    }

    getNickname(email: any) {
        const endIndex = email?.value?.indexOf('@');
        return email?.value?.substring(0, endIndex).replace(/\./g, '');
    }
}
