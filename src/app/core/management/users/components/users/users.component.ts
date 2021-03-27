import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableComponent, PER_PAGE, EDIT_BUTTON_CONTENT, DELETE_BUTTON_CONTENT } from 'src/app/shared/components/table/table.component';
import { Row } from 'ng2-smart-table/lib/lib/data-set/row';
import { Role } from 'src/app/core/models/role';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomServerDataSource } from 'src/app/shared/util/custom-server-data-source';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { UsersService } from '../../../../services/users/users.service';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/core/services/roles/roles.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { MultiselectFilterComponent } from 'src/app/core/components/multiselect-filter/multiselect-filter.component';
import { DateFilterComponent } from 'src/app/core/components/date-filter/date-filter.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ContractorsComponent } from 'src/app/core/setting/contractors/components/contractors/contractors.component';


@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ContractorsComponent),
            multi: true
        }
    ]
})
export class UsersComponent extends TableComponent implements OnInit {
    roles: Array<any> = [];
    source: CustomServerDataSource;
    filterConf = {
        name: {
            param: 'name',
            op: 'like'
        },
        lastName: {
            param: 'lastName',
            op: 'like'
        },
        email: {
            param: 'email',
            op: 'like'
        },
        roles: {
            param: 'authUserRoleList.authUserRolePk.roleId'
        },
        created: {
            param: 'created'
        }
    };

    constructor(public translate: TranslateService,
        private readonly http: HttpClient,
        private readonly alertService: AlertService,
        private readonly usersService: UsersService,
        private readonly router: Router,
        private readonly rolesService: RolesService,
        private readonly toast: ToastService,) {
        super(translate);
    }

    ngOnInit() {
        this.roles = [];
        this.rolesService.getRoles().subscribe((roles: Role[]) => {
            this.roles = roles.map(role => {
                return { value: role.id, title: role.description.es };
            });
            super.setSettings(this.buildSettings());
            this.buildDataSource();
        }, (err: any) => {
            if (err.status === 0) {
                this.toast.error('general.errors.serverMomentarilyOutOfService', 'general.errors.title');
            } else {
                const message = err.error?.message || err.message;
                this.toast.error(message, 'general.errors.title');
            }
        });
    }

    buildDataSource() {
        // See ServerSourceConf for the configuration.
        this.source = new CustomServerDataSource(this.http,
            {
                endPoint: `${environment.auth}/users/search/paged`,
                pagerPageKey: 'page',
                pagerLimitKey: 'size',
                dataKey: 'content',
                totalKey: 'totalElements',
                filterFieldKey: '#field#',
                sortFieldKey: 'sort'
            },
            {
                transformDataParams: {},
                transformDataFunc: this.transformData,
                filter: this.filterConf
            });
        // Ordenamos por defecto por fecha de creación.
        this.source.setSort([{ field: 'created', direction: 'desc' }]);
    }

    transformData(params: any, data: any[]) {
        data.forEach(d => {
            d.roles = d.authUserRoleList.map(authUserRole => {
                const role = authUserRole.authRole as Role;
                return role?.description?.es;
            });
        });
    }

    onEdit(row: Row) {
        const id = row.getData().nickname;
        this.router.navigate(['core/management/users/user', id]);
    }

    onDelete(row: Row) {
        const id = row.getData().nickname;
        this.translate.get('management.users.user').subscribe((title) => {
            this.translate.get('general.messages.onDelete', { title: title, id: id }).subscribe((response) => {
                this.alertService.confirm(response, 'warning').then((response) => {
                    if (response) {
                        this.usersService.deleteUser(id).subscribe((_) => {
                            this.source.reset();
                        });
                    }
                });
            });
        });
    }

    buildSettings() {
        return {
            columns: {
                name: {
                    field: 'name',
                    title: 'management.users.view.name',
                    hide: false,
                },
                lastName: {
                    field: 'lastName',
                    title: 'management.users.view.lastName',
                    hide: false,
                },
                email: {
                    field: 'email',
                    title: 'management.users.view.email',
                    hide: false,
                },
                roles: {
                    field: 'roles',
                    title: 'management.users.view.roles',
                    hide: false,
                    filter: {
                        type: 'custom',
                        component: MultiselectFilterComponent,
                        config: {
                            options: this.roles,
                            selectedOptions: [],
                        }
                    }
                },
                created: {
                    field: 'created',
                    title: 'general.createdDate',
                    hide: false,
                    filter: {
                        type: 'custom',
                        component: DateFilterComponent
                    }
                }
            },
            sort: true,
            filter: true,
            mode: 'external',
            actions: {
                columnTitle: 'general.actions',
                add: false,
                edit: true,
                delete: true,
                position: 'left'
            },
            edit: {
                editButtonContent: EDIT_BUTTON_CONTENT
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: DELETE_BUTTON_CONTENT
            },
            pager: {
                display: true,
                perPage: PER_PAGE
            },
            attr: {
                class: 'table'
            },
            noDataMessageTitle: 'management.users.users',
            noDataMessage: 'general.messages.noTableDataMessage'
        };
    }
}
