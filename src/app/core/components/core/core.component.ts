import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/shared/services/menu/menu.service';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})
export class CoreComponent implements OnInit, OnDestroy {

  headerMenu: MenuItem[] = [    
    {
      key: 'management',
      icon: 'shield-outline',
      title: 'management.management',
      expanded: false,
      children: [
        {
          title: 'management.users.users',
          icon: 'people-outline',
          link: '/management/users',
        }
      ]
    },
  ];
  subs: Subscription[] = [];

  constructor(
    private readonly sidebarService: NbSidebarService,
    private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.translateMenuItems(this.headerMenu);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
