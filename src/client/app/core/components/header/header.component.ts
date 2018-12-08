import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbMenuService } from '@nebular/theme';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { LangService } from '../../../shared/services/lang/lang.service';
import { LangSwitcherListComponent } from '../lang-switcher-list/lang-switcher-list.component';
import { ThemeSwitcherListComponent } from '../../../theme/components/theme-switcher-list/theme-switcher-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  userMenu: NbMenuItem[] = [
    {
      title: 'users.profile',
      icon: 'fas fa-user',
      link: '/core/users/profile'
    },
    {
      title: 'auth.logOut.title',
      icon: 'fas fa-sign-out-alt'
    }
  ];

  themeSwitcherListComponent = ThemeSwitcherListComponent;

  lang: string;
  langSwitcherListComponent = LangSwitcherListComponent;

  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService, private menu: MenuService,
    private langService: LangService) { }

  ngOnInit() {
    this.lang = this.langService.get({ translated: true });

    this.menu.translateMenuItems(this.userMenu);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
