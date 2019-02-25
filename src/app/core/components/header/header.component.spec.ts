import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NbLayoutModule, NbUserModule, NbContextMenuModule, NbActionsModule, NbPopoverModule,
   NbMenuModule, NbSidebarModule, NbOverlayService, NbOverlay, NbLayoutDirectionService, NbPositionBuilderService } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwitcherComponent } from '../../../theme/components/switcher/switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { LangService } from '../../../shared/services/lang/lang.service';
import { CookieModule } from 'ngx-cookie';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NbLayoutModule,
        FontAwesomeModule,
        NbUserModule,
        NbContextMenuModule,
        NbActionsModule,
        NbPopoverModule,
        NbMenuModule,
        TranslateModule.forRoot(),
        CookieModule.forRoot(),
      ],
      declarations: [
        HeaderComponent,
        SwitcherComponent,
      ],
      providers: [
        ...NbSidebarModule.forRoot().providers,
        ...NbMenuModule.forRoot().providers,
        MenuService,
        LangService,
        NbOverlayService,
        NbOverlay,
        NbLayoutDirectionService,
        NbPositionBuilderService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
