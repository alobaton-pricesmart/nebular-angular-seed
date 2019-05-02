import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.interfaces';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.scss']
})
export class UsersComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    users: User[];


    constructor() {
    }

    ngOnInit() {
    }

}
