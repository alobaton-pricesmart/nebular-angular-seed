import { Component, ViewChild, OnInit } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { ThemeSwitcherListComponent } from '../theme-switcher-list/theme-switcher-list.component';

@Component({
    moduleId: module.id,
    selector: 'app-theme-switcher',
    templateUrl: 'theme-switcher.component.html',
    styleUrls: ['theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {
    @ViewChild(NbPopoverDirective)
    popover: NbPopoverDirective;

    switcherListComponent = ThemeSwitcherListComponent;
    theme: NbJSThemeOptions;

    constructor() { }

    ngOnInit() {
    }
}
