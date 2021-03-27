import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler } from '../../../helpers/http-error-handler';
import { environment } from 'src/environments/environment';

@Injectable()
export class RolesService extends BaseService<any> {

  constructor(protected http: HttpClient, protected httpErrorHandler: HttpErrorHandler) {
    super(http, httpErrorHandler, `${environment.auth}/roles`, 'RolesService');
  }

  getRoles(query?: any): Observable<any[]> {
    const options = { params: query };
    const url = `/search/list`;
    return super.getAll(options, url);
  }
}
