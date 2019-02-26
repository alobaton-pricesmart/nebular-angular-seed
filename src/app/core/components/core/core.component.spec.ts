import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { LangService } from '../../../shared/services/lang/lang.service';
import { CookieModule } from 'ngx-cookie';
import { ThemeModule } from 'src/app/theme/theme.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule.forRoot(),
        ThemeModule.forRoot(),
        CookieModule.forRoot(),
        TranslateModule.forRoot(),
      ],
      declarations: [
        CoreComponent,
        HeaderComponent,
        SidebarComponent,
      ],
      providers: [
        MenuService,
        LangService,
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
