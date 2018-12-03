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
            editButtonContent: '<i class="far fa-edit"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="fas fa-trash-alt"></i>',
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            username: {
                title: 'Nombre de Usuario',
                type: 'string',
            },
            firstName: {
                title: 'Primer Nombre',
                type: 'string',
            },
            secondName: {
                title: 'Primer Nombre',
                type: 'string',
            },
            firstLastName: {
                title: 'Primer Apellido',
                type: 'string',
            },
            secondLastName: {
                title: 'Segundo Apellido',
                type: 'string',
            },
            email: {
                title: 'E-Mail',
                type: 'string',
            },
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
