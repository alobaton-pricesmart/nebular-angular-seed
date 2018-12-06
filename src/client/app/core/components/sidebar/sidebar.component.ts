import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MenuService } from '../../../shared/services/menu/menu.service';

const SIDEBAR_ITEMS: NbMenuItem[] = [
  {
    title: 'dashboard.dashboard',
    icon: 'fas fa-clipboard',
    link: '/core/dashboard',
    home: true,
  },
  {
    title: 'users.users',
    icon: 'fas fa-users',
    home: false,
    expanded: false,
    pathMatch: '/core/users',
    children: [
      {
        title: 'users.users',
        icon: 'fas fa-users',
        link: '/core/users',
      },
      {
        title: 'users.create.title',
        icon: 'fas fa-user-plus',
        link: '/core/users/create',
      },
    ]
  },
];

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarMenu = SIDEBAR_ITEMS;

  constructor(private menu: MenuService) {
  }

  ngOnInit() {
    this.menu.translateMenuItems(this.sidebarMenu);
  }

}
