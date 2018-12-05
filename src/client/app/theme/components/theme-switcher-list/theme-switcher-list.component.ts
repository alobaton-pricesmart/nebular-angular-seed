import { Component, Input, OnInit } from '@angular/core';
import { NbPopoverDirective, NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'app-theme-switcher-list',
    templateUrl: 'theme-switcher-list.component.html',
    styleUrls: ['theme-switcher-list.component.css'],
})
export class ThemeSwitcherListComponent implements OnInit {
    @Input()
    popover: NbPopoverDirective;

    theme: NbJSThemeOptions;

    themes: any[] = [];

    constructor(private themeService: NbThemeService, private translate: TranslateService) { }

    onToggleTheme(theme: string) {
        this.themeService.changeTheme(theme);
        this.popover.hide();
    }

    ngOnInit() {
        this.loadThemes();
    }

    loadThemes() {
        this.translate.get('default').subscribe(reply => {
            this.themes.push({ title: reply, key: 'default' });
        });
        this.translate.get('cosmic').subscribe(reply => {
            this.themes.push({ title: reply, key: 'cosmic' });
        });
        this.translate.get('corporate').subscribe(reply => {
            this.themes.push({ title: reply, key: 'corporate' });
        });
    }
}
