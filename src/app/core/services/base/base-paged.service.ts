import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { Page } from '../../models/page';
import { HttpErrorHandler } from '../../../helpers/http-error-handler';

export class BasePagedService<T> extends BaseService<T> {

    constructor(
        protected http: HttpClient,
        protected httpErrorHandler: HttpErrorHandler,
        protected baseUrl: string,
        protected serviceName?: string) {
        super(http, httpErrorHandler, baseUrl, serviceName);
    }

    protected getAllPaged(options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }, url?: string): Observable<Page<T>> {
        options.observe = 'body';

        return this.http.get<any>(`${this.baseUrl}${url !== undefined && url !== null ? url : ''}`, options).pipe(
            catchError(this.errorHandler<any>('getAllTable'))
        );
    }

}
