import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../../shared/services/menu/menu.service';
import { LangService } from '../../../shared/services/lang/lang.service';
import { CookieModule } from 'ngx-cookie';
import { ThemeModule } from 'src/app/theme/theme.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot(),
        ThemeModule.forRoot(),
        TranslateModule.forRoot(),
        CookieModule.forRoot(),
      ],
      declarations: [
        HeaderComponent,
      ],
      providers: [
        MenuService,
        LangService,
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
