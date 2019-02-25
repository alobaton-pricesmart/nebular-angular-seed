import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { NbMenuModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../../../shared/services/menu/menu.service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NbMenuModule,
        TranslateModule.forRoot(),
      ],
      declarations: [
        SidebarComponent,
      ],
      providers: [
        ...NbMenuModule.forRoot().providers,
        MenuService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
