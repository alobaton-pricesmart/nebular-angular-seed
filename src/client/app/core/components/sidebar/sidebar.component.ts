import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

const SIDEBAR_ITEMS: NbMenuItem[] = [
  {
    title: 'Tablero Administrativo',
    icon: 'far fa-clipboard',
    link: '/core/dashboard',
    home: true,
  },
  {
    title: 'Usuarios',
    icon: 'fas fa-user',
    home: false,
    expanded: true,
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
export class SidebarComponent implements OnInit {

  sidebarMenu = SIDEBAR_ITEMS;

  constructor() {
  }

  ngOnInit() {
  }

}
