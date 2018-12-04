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
    icon: 'fas fa-user',
    home: false,
    expanded: true,
    pathMatch: '/core/users',
    children: [
      {
        title: 'Usuarios',
        link: '/core/users',
      },
      {
        title: 'Crear Usuario',
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
