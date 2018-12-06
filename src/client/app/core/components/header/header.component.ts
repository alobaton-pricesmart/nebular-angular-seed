import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbMenuService } from '@nebular/theme';
import { MenuService } from '../../../shared/services/menu/menu.service';

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
      icon: 'fas fa-user'
    },
    {
      title: 'auth.logOut',
      icon: 'fas fa-sign-out-alt'
    }
  ];

  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService, private menu: MenuService) { }

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
