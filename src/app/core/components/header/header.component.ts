import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbMenuService, NbThemeService } from '@nebular/theme';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { ThemeSwitcherListComponent } from '../../../theme/components/theme-switcher-list/theme-switcher-list.component';
import { User } from '../../models/user';
import { AuthService } from '../../../services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  userMenu: NbMenuItem[] = [
    {
      title: 'auth.logOut.title',
      link: '/auth/logout',
      icon: 'power-outline'
    }
  ];
  themeSwitcherListComponent = ThemeSwitcherListComponent;
  public user: User;
  public userFullName: string;

  constructor(
    private readonly sidebarService: NbSidebarService,
    private readonly nbMenuService: NbMenuService,
    private readonly menuService: MenuService,
    public theme: NbThemeService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe((user: User) => {
      this.user = user;
      this.userFullName = this.usersService.fullName(this.user);
    });

    this.menuService.translateMenuItems(this.userMenu);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'sidebar');
    return false;
  }

  goToHome() {
    this.nbMenuService.navigateHome('sidebarMenu');
  }
}
