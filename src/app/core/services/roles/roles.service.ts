import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler } from '../../helpers/http-error-handler';

@Injectable()
export class RolesService extends BaseService<any> {

  constructor(protected http: HttpClient, protected httpErrorHandler: HttpErrorHandler) {
    super(http, httpErrorHandler, 'RolesService');
  }

  getRoles(): Observable<any[]> {
    const options = {};
    const url = `roles`;
    return super.getAll(url, options);
  }
}
