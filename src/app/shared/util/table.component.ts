import { TranslateService } from '@ngx-translate/core';
/** Elements per page */
export const PER_PAGE = 10;
export const DELETE_BUTTON_CONTENT = `<div class="fs-18 mx-1 my-1">
<i class="eva eva-trash-2-outline rounded-circle p-2 bg-light text-danger"></i>
</div>`;

export class TableComponent {

    constructor(public translate: TranslateService) { }

    public translateColumns(columns: any) {
        const items = Object.values(columns);
        items.forEach((item: any) => {
            this.translate.get(item.title).subscribe((respuesta: string) => {
                item.title = respuesta;
            });
        });
    }

    public translateField(object: any, field: string, params?: any) {
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

}
