import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthService, NbResetPasswordComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AUTH_APP_TOKEN } from '../../security.config';

@Component({
    selector: 'app-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.scss']
})
export class ResetPasswordComponent extends NbResetPasswordComponent implements OnInit, OnDestroy {

    constructor(
        service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) protected options = {},
        cd: ChangeDetectorRef,
        router: Router,
        private readonly authService: AuthService,
        private readonly route: ActivatedRoute) {
        super(service, options, cd, router);
    }

    ngOnInit() {
        this.route.queryParams.subscribe((params: any) => {
            const passwordToken = params.token;
            this.authService.postTokenAuthPassword(passwordToken).subscribe((response: any) => {
                localStorage.setItem(AUTH_APP_TOKEN, JSON.stringify(response));
            });
        });
    }

    ngOnDestroy() {
        localStorage.removeItem(AUTH_APP_TOKEN);
    }
}
