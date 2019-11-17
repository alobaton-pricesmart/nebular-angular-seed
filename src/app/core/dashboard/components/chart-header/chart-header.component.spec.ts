import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHeaderComponent } from './chart-header.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ChartHeaderComponent', () => {
  let component: ChartHeaderComponent;
  let fixture: ComponentFixture<ChartHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot(),
        ThemeModule.forRoot(),
      ],
      declarations: [
        ChartHeaderComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
