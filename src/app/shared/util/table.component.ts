import { TranslateService } from '@ngx-translate/core';

export class TableComponent {

    constructor(public translate: TranslateService) {}

    public translateColumns(columns: any) {
        const items = Object.values(columns);
        items.forEach((item: any) => {
            this.translate.get(item.title).subscribe((respuesta: string) => {
                item.title = respuesta;
            });
        });
    }

    public translateField(object: any, field: string) {
        const title = object[field];
        this.translate.get(title).subscribe((respuesta: string) => {
            object[field] = respuesta;
        });
    }

}
