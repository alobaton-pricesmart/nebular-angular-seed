import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbMenuService } from '@nebular/theme';

const USER_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Perfil',
    icon: 'fas fa-user'
  },
  {
    title: 'Cerrar Sesión',
    icon: 'fas fa-sign-out-alt'
  }
];

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  userMenu = USER_MENU_ITEMS;

  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService) { }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
