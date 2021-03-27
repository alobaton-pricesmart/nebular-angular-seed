import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastService } from '../shared/services/toast/toast.service';
import { Router } from '@angular/router';

export type HandleError =
    <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandler {
    constructor(private toast: ToastService, private readonly router: Router) { }

    createHandleError = (serviceName = '') => <T>
        (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

    handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

        return (error: HttpErrorResponse): Observable<T> => {
            // TODO(soportesolicitudesmantenimiento): Send to external logger.
            const message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                `server returned code ${error.status} with body "${error.error}"`;
            console.error(message);

            if (error.status === 0) {
                this.toast.error('general.errors.serverMomentarilyOutOfService');
            } else if (error.status === 401) {
                this.toast.error('general.errors.sesionExpired');
                this.router.navigate(['/auth/login']);
            } else if (error.status === 403) {
                this.toast.error('general.errors.foribiddenAccess');
            }

            throw error;
        };

    }
}
