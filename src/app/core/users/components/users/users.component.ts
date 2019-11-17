import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/users/models/users.interfaces';
import { TranslateService } from '@ngx-translate/core';
import { TableComponent, PER_PAGE, DELETE_BUTTON_CONTENT } from 'src/app/shared/util/table.component';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.scss']
})
export class UsersComponent extends TableComponent implements OnInit {
    users: User[];
    settings = {
        columns: {
            id: {
                title: 'users.view.id'
            },
            name: {
                title: 'users.view.name'
            },
            lastName: {
                title: 'users.view.lastName'
            },
            email: {
                title: 'users.view.email'
            }
        },
        actions: {
            columnTitle: 'general.actions',
            add: false,
            edit: false,
            delete: true,
            position: 'right'
        },
        delete: {
            confirmDelete: true,
            deleteButtonContent: DELETE_BUTTON_CONTENT
        },
        pager: {
            display: true,
            perPage: PER_PAGE
        },
        noDataMessage: 'general.messages.noTableDataMessage'
    };


    constructor(public translate: TranslateService) {
        super(translate);
    }


    ngOnInit() {
        this.translateColumns(this.settings.columns);
        this.translateField(this.settings.actions, 'columnTitle');
        this.translateField(this.settings, 'noDataMessage', {title: 'users.users'});
    }
}
