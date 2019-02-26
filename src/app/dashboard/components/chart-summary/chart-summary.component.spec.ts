import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSummaryComponent } from './chart-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeModule } from 'src/app/theme/theme.module';

describe('ChartSummaryComponent', () => {
  let component: ChartSummaryComponent;
  let fixture: ComponentFixture<ChartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot(),
        ThemeModule.forRoot(),
      ],
      declarations: [ ChartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
