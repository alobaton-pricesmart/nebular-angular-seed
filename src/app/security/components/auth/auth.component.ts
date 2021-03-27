import { Component, OnInit } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import { LangService } from '../../../shared/services/lang/lang.service';
import { Location } from '@angular/common';
import { ThemeSwitcherListComponent } from '../../../theme/components/theme-switcher-list/theme-switcher-list.component';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.scss']
})
export class AuthComponent extends NbAuthComponent implements OnInit {

    themeSwitcherListComponent = ThemeSwitcherListComponent;

    constructor(
        public authService: NbAuthService,
        public location: Location,
        public theme: NbThemeService) {
        super(authService, location);
    }

    ngOnInit() {
    }
}
