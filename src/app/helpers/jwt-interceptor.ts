import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { switchMap } from 'rxjs/operators';
import { AUTH_APP_TOKEN } from '../security/security.config'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private nbAuthService: NbAuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.nbAuthService.getToken().pipe(
      switchMap((nbAuthToken: NbAuthToken) => {
        let token = nbAuthToken.getValue();
        // In case you need to get the access_token directly from localStorage, enable the following code...
        if (token === null || token === undefined || token.length === 0) {
          const authAppToken = JSON.parse(localStorage.getItem(AUTH_APP_TOKEN));
          token = authAppToken?.access_token;
        }
        if (token !== null && token !== undefined && token.length !== 0) {
          request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + token)
          });
        }
        return next.handle(request);
      })
    );
  }
}
