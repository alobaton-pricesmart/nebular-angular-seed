import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  @Input()
  items: MenuItem[] = [];
  subs: Subscription[] = [];

  constructor(
    private readonly menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.translateMenuItems(this.items);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
