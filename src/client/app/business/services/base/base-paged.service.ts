import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { HttpErrorHandler } from '../../helpers/http-error-handler';
import { Page } from '../../../models/page.interfaces';

@Injectable()
export class BasePagedService<T> extends BaseService<T> {

    constructor(protected http: HttpClient, protected httpErrorHandler: HttpErrorHandler, serviceName?: string) {
        super(http, httpErrorHandler, serviceName);
    }

    protected getAllPaged(url: string, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }, input: any): Observable<Page<T>> {
        options.observe = 'body';

        return this.http.post<any>(`${this.baseUri}${url}`, input, options).pipe(
            catchError(this.handleError<any>('getAllTable'))
        );
    }

}
