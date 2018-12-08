import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../../helpers/http-error-handler';

const BASE_URI = 'api/';

@Injectable()
export class BaseService<T> {
    protected handleError: HandleError;
    protected baseUri = BASE_URI;

    constructor(protected http: HttpClient, protected httpErrorHandler: HttpErrorHandler, serviceName?: string) {
        serviceName = serviceName ? serviceName : '';
        this.handleError = httpErrorHandler.createHandleError(serviceName);
    }

    protected post(url: string, model: T, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }): Observable<T> {
        options.observe = 'body';

        return this.http.post<T>(`${this.baseUri}${url}`, model, options).pipe(
            catchError(this.handleError('post', model))
        );
    }

    protected patch(url: string, model: T, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }): Observable<T> {
        options.observe = 'body';

        return this.http.patch<T>(`${this.baseUri}${url}`, model, options).pipe(
            catchError(this.handleError('patch', model))
        );
    }

    protected get(url: string, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }): Observable<T> {
        options.observe = 'body';

        return this.http.get<T>(`${this.baseUri}${url}`, options).pipe(
            catchError(this.handleError<T>('get'))
        );
    }

    protected getAll(url: string, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }): Observable<T[]> {
        options.observe = 'body';

        return this.http.get<T[]>(`${this.baseUri}${url}`, options).pipe(
            catchError(this.handleError<T[]>('getAll'))
        );
    }

    protected delete(url: string, options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'json',
        withCredentials?: boolean,
    }): Observable<any> {
        return this.http.delete(`${this.baseUri}${url}`, options).pipe(
            catchError(this.handleError('delete'))
        );
    }
}
