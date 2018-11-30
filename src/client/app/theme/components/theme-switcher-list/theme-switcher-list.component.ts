import { Component, Input } from '@angular/core';
import { NbPopoverDirective, NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

@Component({
    moduleId: module.id,
    selector: 'app-theme-switcher-list',
    templateUrl: 'theme-switcher-list.component.html',
    styleUrls: ['theme-switcher-list.component.css'],
})
export class ThemeSwitcherListComponent {
    @Input()
    popover: NbPopoverDirective;

    theme: NbJSThemeOptions;

    themes = [
        {
            title: 'Claro',
            key: 'default',
        },
        {
            title: 'Oscuro',
            key: 'cosmic',
        },
        {
            title: 'Corporativo',
            key: 'corporate',
        },
    ];

    constructor(private themeService: NbThemeService) { }

    onToggleTheme(theme: string) {
        this.themeService.changeTheme(theme);
        this.popover.hide();
    }
}