import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { NbAuthService, NbAuthOAuth2JWTToken } from '@nebular/auth';

@Injectable()
export class UserService {

  user: any;

  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe((token: NbAuthOAuth2JWTToken) => {
        if (token.isValid()) {
            this.user = token.getAccessTokenPayload();
        }
    });
  }

  getUser(): Observable<any> {
    return of(this.user);
  }

}
