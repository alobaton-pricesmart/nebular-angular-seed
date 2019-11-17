import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbMenuService, NbThemeService } from '@nebular/theme';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { LangService } from '../../../shared/services/lang/lang.service';
import { LangSwitcherListComponent } from '../lang-switcher-list/lang-switcher-list.component';
import { ThemeSwitcherListComponent } from '../../../theme/components/theme-switcher-list/theme-switcher-list.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  userMenu: NbMenuItem[] = [
    {
      title: 'users.profile',
      link: '/core/users/profile',
      icon: 'person-outline'
    },
    {
      title: 'auth.logOut.title',
      link: '/auth/logout',
      icon: 'power-outline'
    }
  ];

  themeSwitcherListComponent = ThemeSwitcherListComponent;

  langSwitcherListComponent = LangSwitcherListComponent;

  constructor(
    private sidebarService: NbSidebarService, 
    private menuService: NbMenuService, 
    private menu: MenuService,
    public langService: LangService,
    public theme: NbThemeService) { }

  ngOnInit() {
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
