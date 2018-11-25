import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

const SIDEBAR_ITEMS: NbMenuItem[] = [
  {
    title: 'Tablero Administrativo',
    icon: 'far fa-clipboard',
    link: '/core/dashboard',
    home: false,
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
