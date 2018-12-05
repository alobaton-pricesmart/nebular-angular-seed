import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbMenuService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  userMenu: NbMenuItem[] = [];

  constructor(private sidebarService: NbSidebarService, private menuService: NbMenuService, private translate: TranslateService) { }

  ngOnInit() {
    this.loadMenu();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  loadMenu() {
    this.translate.get('users.profile').subscribe(reply => {
      this.userMenu.push({ title: reply, icon: 'fas fa-user' });
    });

    this.translate.get('auth.logOut').subscribe(reply => {
      this.userMenu.push({ title: reply, icon: 'fas fa-sign-out-alt' });
    });
  }
}
