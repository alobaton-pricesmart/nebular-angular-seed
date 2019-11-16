import { Component, Input, OnInit } from '@angular/core';
import { NbPopoverDirective, NbThemeService, NbMenuItem } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { MenuService } from '../../../shared/services/menu/menu.service';

@Component({
    selector: 'app-theme-switcher-list',
    templateUrl: 'theme-switcher-list.component.html',
    styleUrls: ['theme-switcher-list.component.scss'],
})
export class ThemeSwitcherListComponent implements OnInit {
    @Input()
    popover: NbPopoverDirective;

    themes: NbMenuItem[] = [
        { title: 'theme.default', data: 'default' },
        { title: 'theme.cosmic', data: 'cosmic' },
        { title: 'theme.corporate', data: 'corporate' },
        { title: 'theme.dark', data: 'dark' }
    ];

    constructor(private themeService: NbThemeService, private menu: MenuService) { }

    ngOnInit() {
        this.menu.translateMenuItems(this.themes);
    }

    onToggleTheme(theme: string) {
        this.themeService.changeTheme(theme);
        this.popover.hide();
    }
}
