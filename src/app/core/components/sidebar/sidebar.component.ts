import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MenuService } from '../../../shared/services/menu/menu.service';

const SIDEBAR_ITEMS: NbMenuItem[] = [
  {
    title: 'dashboard.dashboard',
    link: '/core/dashboard',
    icon: 'grid-outline',
    home: true,
  },
  {
    title: 'users.users',
    link: '/core/users',
    icon: 'person-outline'
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarMenu = SIDEBAR_ITEMS;

  constructor(private menu: MenuService) {
  }

  ngOnInit() {
    this.menu.translateMenuItems(this.sidebarMenu);
  }

}
