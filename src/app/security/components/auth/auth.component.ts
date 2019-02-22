import { Component, OnInit } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import { LangSwitcherListComponent } from '../../../core/components/lang-switcher-list/lang-switcher-list.component';
import { LangService } from '../../../shared/services/lang/lang.service';
import { Location } from '@angular/common';
import { ThemeSwitcherListComponent } from '../../../theme/components/theme-switcher-list/theme-switcher-list.component';

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.scss']
})
export class AuthComponent extends NbAuthComponent implements OnInit {

    themeSwitcherListComponent = ThemeSwitcherListComponent;

    lang: string;
    langSwitcherListComponent = LangSwitcherListComponent;

    constructor(authService: NbAuthService, location: Location, private langService: LangService) {
        super(authService, location);
    }

    ngOnInit() {
        this.lang = this.langService.get({ translated: true });
    }
}
