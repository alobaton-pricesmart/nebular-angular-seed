import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpErrorHandler } from "src/app/helpers/http-error-handler";
import { environment } from "src/environments/environment";
import { User } from "../../core/models/user";
import { BaseService } from "../../core/services/base/base.service";
import { switchMap } from 'rxjs/operators';
import { OAUTH_STRATEGY } from "src/app/security/security.config";

@Injectable()
export class AuthService extends BaseService<any> {

    private userInfo: User;

    constructor(protected http: HttpClient, protected httpErrorHandler: HttpErrorHandler) {
        super(http, httpErrorHandler, `${environment.auth}/oauth`, 'RolesService');
    }

    getUserInfo(): Observable<User> {
        if (this.userInfo !== null && this.userInfo !== undefined) {
            return of(this.userInfo);
        } else {
            const options = {};
            const url = `/user-info`;
            return super.get(options, url).pipe(
                switchMap((userInfo: User) => {
                    this.userInfo = new User();
                    Object.assign(this.userInfo, userInfo);
                    return of(this.userInfo);
                })
            );
        }
    }


    postTokenAuthPassword(token: string) {
        const body = { 'grant_type': 'auth_password', 'password_token': token };

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(`${OAUTH_STRATEGY.clientId}:${OAUTH_STRATEGY.clientSecret}`)
        };

        const params = {
            headers: new HttpHeaders(headers)
        };

        const url = `/token?grant_type=auth_password&password_token=${token}`;
        return super.post(body, params, url);
    }

    postTokenClientCredentials() {
        const body = { 'grant_type': 'client_credentials' };

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(`${OAUTH_STRATEGY.clientId}:${OAUTH_STRATEGY.clientSecret}`)
        };

        const params = {
            headers: new HttpHeaders(headers)
        };

        const url = `/token?grant_type=client_credentials`;
        return super.post(body, params, url);
    }
}
