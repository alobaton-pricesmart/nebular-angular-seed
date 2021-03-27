import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NbMenuItem } from '@nebular/theme';

@Injectable()
export class MenuService {

    constructor(private translate: TranslateService) {
    }

    // TODO(soportesolicitudesmantenimiento): Implementar llamado para solicitar menus a la API.

    translateMenuItems(menu: NbMenuItem[]) {
        menu.forEach(item => {
            this.translateMenuItem(item);
        });
    }

    private translateMenuItem(menuItem: NbMenuItem) {
        if (menuItem.children != null) {
            menuItem.children.forEach(item => this.translateMenuItem(item));
        }
        this.translate.get(menuItem.title).subscribe((respuesta: string) => {
            menuItem.title = respuesta;
        });
    }
}

