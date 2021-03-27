import { TranslateService } from '@ngx-translate/core';
/** Elements per page */
export const PER_PAGE = 10;
export const DELETE_BUTTON_CONTENT = `<div class="fs-18 mx-1 my-1">
<i class="eva eva-trash-2-outline rounded-circle p-2 bg-light text-danger"></i>
</div>`;
export const EDIT_BUTTON_CONTENT = `<div class="fs-18 mx-1 my-1">
<i class="eva eva-edit-2-outline rounded-circle p-2 bg-light text-primary"></i>
</div>`;

export class TableComponent {

    public columns: any[] = [];
    public selectedColumns: any[] = [];
    public settings: any;

    constructor(public translate: TranslateService) {
    }


    private translateColumns(columns: any) {
        const items = Object.values(columns);
        items.forEach((item: any) => {
            this.translate.get(item.title).subscribe((respuesta: string) => {
                item.title = respuesta;
            });
        });
    }

    private translateField(object: any, field: string, params?: any) {
        if (params) {
            for (const key in params) {
                if (params[key]) {
                    this.translate.get(params[key]).subscribe((respuesta: string) => {
                        params[key] = respuesta;
                    });
                }
            }
        }

        const title = object[field];
        this.translate.get(title, params).subscribe((respuesta: string) => {
            object[field] = respuesta;
        });
    }

    private setUpColumns(settings: any) {
        const that = this;
        Object.keys(settings.columns).forEach(function (key, _) {
            that.columns.push(settings.columns[key]);
        });
        this.columns;
    }

    private setUpSelectedColumns(columns: any[]) {
        this.selectedColumns = columns.filter(column => !column.hide).map(column => column.field);
    }

    public getColumns() {
        return this.columns;
    }

    public setSettings(settings: any) {
        this.settings = settings;
        this.translateColumns(this.settings.columns);
        this.translateField(this.settings.actions, 'columnTitle');
        this.translateField(this.settings, 'noDataMessage', { title: this.settings.noDataMessageTitle });
        this.setUpColumns(this.settings);
        this.setUpSelectedColumns(this.columns);
    }

    protected setUpHideColumnOnSettings(column: any) {
        const _settings = Object.assign({}, this.settings);
        column.hide = !column.hide;
        _settings.columns[column.field].hide = column.hide;
        this.settings = _settings;
        this.setUpSelectedColumns(this.columns);
    }

}
