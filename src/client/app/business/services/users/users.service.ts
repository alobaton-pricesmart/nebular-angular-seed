import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorHandler } from '../../helpers/http-error-handler';
import { User } from '../../../models/users.interfaces';
import { BasePagedService } from '../base/base-paged.service';

@Injectable()
export class UsersService extends BasePagedService<User> {

    constructor(protected http: HttpClient, protected httpErrorHandler: HttpErrorHandler) {
        super(http, httpErrorHandler, 'UsersService');
    }

    createUser(user: User): Observable<User> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const url = 'users';
        return super.post(url, user, options);
    }

    getUser(userId: string): Observable<User> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const url = `users/${userId}`;
        return super.get(url, options);
    }

    getUsers(query?: any): Observable<User[]> {
        const options = {};
        const url = `users`;
        return super.getAll(url, options);
    }

    getUsersPaged(input: any, query?: any): Observable<any> {
        const options = {};
        let url = `users/paged`;
        return super.getAllPaged(url, options, input);
    }

    updateUser(userId: string, user: User): Observable<User> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const url = `users/${userId}`;
        return super.patch(url, user, options);
    }

    deleteUser(userId: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const url = `users/${userId}`;
        return super.delete(url, options);
    }
}
