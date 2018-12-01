import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
    moduleId: module.id,
    selector: 'app-not-found',
    templateUrl: 'not-found.component.html',
    styleUrls: ['not-found.component.css']
})
export class NotFoundComponent {

    constructor(private menuService: NbMenuService) {
    }

    goToHome() {
        this.menuService.navigateHome();
    }

}
