import { Component, Input } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
    moduleId: module.id,
    selector: 'app-lang-switcher-list',
    templateUrl: 'lang-switcher-list.component.html',
    styleUrls: ['lang-switcher-list.component.css'],
})
export class LangSwitcherListComponent {
    @Input()
    popover: NbPopoverDirective;

    langs = [
        {
            title: 'es-ES',
            key: 'es-ES',
        }
    ];

    constructor() { }

    onToggleLang(lang: string) {
        this.popover.hide();
    }
}
