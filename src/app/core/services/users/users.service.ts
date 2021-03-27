import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { BasePagedService } from '../base/base-paged.service';
import { HttpErrorHandler } from 'src/app/helpers/http-error-handler';
import { environment } from 'src/environments/environment';
import { StringUtil } from 'src/app/shared/util/string.util';

@Injectable()
export class UsersService extends BasePagedService<User> {

    constructor(protected http: HttpClient, protected httpErrorHandler: HttpErrorHandler) {
        super(http, httpErrorHandler, `${environment.auth}/users`, 'UsersService');
    }

    createUser(user: User): Observable<User> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        return super.post(user, options);
    }

    getUser(userId: string): Observable<User> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const url = `/${userId}`;
        return super.get(options, url);
    }

    getUsers(query?: any): Observable<User[]> {
        const options = { params: query };
        const url = `/search/list`;
        return super.getAll(options, url);
    }

    getUsersPaged(query?: any): Observable<any> {
        const options = { params: query };
        const url = `/search/paged`;
        return super.getAllPaged(options, url);
    }

    updateUser(userId: string, user: User): Observable<User> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const url = `/${userId}`;
        return super.patch(user, options, url);
    }

    deleteUser(userId: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        const url = `/${userId}`;
        return super.delete(options, url);
    }

    fullName(user: User): string {
        const builder = [];
        if (!StringUtil.isNullOrEmpty(user?.name)) {
            builder.push(StringUtil.empty(user?.name));
            builder.push(' ');
        }
        if (!StringUtil.isNullOrEmpty(user?.lastName)) {
            builder.push(StringUtil.empty(user?.lastName));
            builder.push(' ');
        }
        return StringUtil.empty(builder.join('')).trim();
    }
}
