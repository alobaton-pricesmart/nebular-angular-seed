import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';
import { HeaderComponent } from '../header/header.component';
import { NbLayoutModule, NbSidebarModule, NbUserModule, NbMenuModule, NbContextMenuModule, NbActionsModule, NbPopoverModule, NbSidebarService, NbThemeService } from '@nebular/theme';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwitcherComponent } from '../../../theme/components/switcher/switcher.component';
import { TranslateModule } from '@ngx-translate/core';

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
