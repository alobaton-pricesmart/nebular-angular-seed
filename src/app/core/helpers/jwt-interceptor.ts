import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthToken } from '@nebular/auth';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: NbAuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.getToken();
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle( request );
    }

    return next.handle(request);
  }

  private async getToken() {
    const token: NbAuthToken = await this.authService.getToken().toPromise();
    return token.getValue();
  }
}
