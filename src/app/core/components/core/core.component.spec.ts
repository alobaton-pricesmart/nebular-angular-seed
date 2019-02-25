import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';
import { HeaderComponent } from '../header/header.component';
import { NbLayoutModule, NbSidebarModule, NbUserModule, NbContextMenuModule, NbActionsModule, NbPopoverModule, NbSidebarService, NbThemeService, NbThemeModule, NbMenuService, NbMenuModule } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwitcherComponent } from '../../../theme/components/switcher/switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { LangService } from '../../../shared/services/lang/lang.service';
import { CookieModule } from 'ngx-cookie';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NbLayoutModule,
        NbSidebarModule,
        FontAwesomeModule,
        NbUserModule,
        NbMenuModule,
        NbContextMenuModule,
        NbActionsModule,
        NbPopoverModule,
        NbThemeModule.forRoot(),
        CookieModule.forRoot(),
        TranslateModule.forRoot(),
      ],
      declarations: [ 
        CoreComponent, 
        HeaderComponent,
        SidebarComponent,
        SwitcherComponent,
      ],
      providers: [
        NbSidebarService,
        NbThemeService,
        NbMenuService,
        MenuService,
        LangService,
        NbMenuInternalService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
