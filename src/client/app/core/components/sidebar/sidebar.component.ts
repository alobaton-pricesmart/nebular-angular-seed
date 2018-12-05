import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

const SIDEBAR_ITEMS: NbMenuItem[] = [
  {
    title: 'Tablero Administrativo',
    icon: 'fas fa-clipboard',
    link: '/core/dashboard',
    home: true,
  },
  {
    title: 'Usuarios',
    icon: 'fas fa-users',
    home: false,
    expanded: false,
    pathMatch: '/core/users',
    children: [
      {
        title: 'Usuarios',
        icon: 'fas fa-users',
        link: '/core/users',
      },
      {
        title: 'Crear Usuario',
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
export class SidebarComponent {

  sidebarMenu = SIDEBAR_ITEMS;

}
