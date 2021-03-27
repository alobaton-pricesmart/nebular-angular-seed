import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../../helpers/http-error-handler';


export class BaseService<T> {
    protected errorHandler: HandleError;

    constructor(
        protected http: HttpClient,
        protected httpErrorHandler: HttpErrorHandler,
        protected baseUrl: string,
        protected serviceName?: string,
    ) {
        serviceName = serviceName ? serviceName : '';
        this.errorHandler = httpErrorHandler.createHandleError(serviceName);
    }

    protected post(model: T, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }, url?: string): Observable<T> {
        options.observe = 'body';

        return this.http.post<T>(`${this.baseUrl}${url !== undefined && url !== null ? url : ''}`, model, options).pipe(
            catchError(this.errorHandler('post', model))
        );
    }

    protected patch(model: T, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }, url?: string): Observable<T> {
        options.observe = 'body';

        return this.http.patch<T>(`${this.baseUrl}${url !== undefined && url !== null ? url : ''}`, model, options).pipe(
            catchError(this.errorHandler('patch', model))
        );
    }

    protected get(options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }, url?: string): Observable<T> {
        options.observe = 'body';

        return this.http.get<T>(`${this.baseUrl}${url !== undefined && url !== null ? url : ''}`, options).pipe(
            catchError(this.errorHandler<T>('get'))
        );
    }

    protected getAll(options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }, url?: string): Observable<T[]> {
        options.observe = 'body';

        return this.http.get<T[]>(`${this.baseUrl}${url !== undefined && url !== null ? url : ''}`, options).pipe(
            catchError(this.errorHandler<T[]>('getAll'))
        );
    }

    protected delete(options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }, url?: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}${url !== undefined && url !== null ? url : ''}`, options).pipe(
            catchError(this.errorHandler('delete'))
        );
    }
}
