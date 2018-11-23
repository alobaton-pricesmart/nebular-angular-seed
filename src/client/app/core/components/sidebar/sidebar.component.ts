import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

const SIDEBAR_ITEMS: NbMenuItem[] = [
  {
    title: 'Tablero Administrativo',
    icon: 'far fa-clipboard',
    link: '/backoffice/dashboard',
    home: false,
  },
];

@Component({
  moduleId: module.id,
  selector: 'app-backoffice-sidebar',
  templateUrl: 'backoffice-sidebar.component.html',
  styleUrls: ['backoffice-sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarMenu = SIDEBAR_ITEMS;

  constructor() {
  }

  ngOnInit() {
  }

}
