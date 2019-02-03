import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {

    settings = {
        mode: 'external',
        actions: {
            columnTitle: 'Acciones',
            add: false,
            eddit: true,
            delete: true,
            position: 'right'
        },
        edit: {
            editButtonContent: '<fa-icon [icon]="[\'far\', \'edit\']"></fa-icon>',
        },
        delete: {
            deleteButtonContent: '<fa-icon [icon]="[\'fas\', \'trash-alt\']"></fa-icon>',
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            name: {
                title: 'Nombres',
                type: 'string',
            },
            lastName: {
                title: 'Apellidos',
                type: 'string',
            },
            email: {
                title: 'Correo Electronico',
                type: 'string',
            },
            roles: {
                title: 'Roles',
                type: 'string'
            }
        },
        pager: {
            display: true
        },
        noDataMessage: 'No hay datos disponibles',
    };

    source: any;

    constructor(private modalService: NgbModal) {
        this.source = new LocalDataSource([]);
    }

    ngOnInit() {
    }

    onEdit(event: any): void {
        console.log(event);
    }

    onDelete(event: any): void {
        console.log(event);
    }

}
