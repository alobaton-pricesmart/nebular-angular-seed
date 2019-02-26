import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsComponent } from './charts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { ChartSummaryComponent } from '../chart-summary/chart-summary.component';
import { ChartHeaderComponent } from '../chart-header/chart-header.component';
import { SalesChartComponent } from '../sales-chart/sales-chart.component';
import { ProfitChartComponent } from '../profit-chart/profit-chart.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule.forRoot(),
        ThemeModule.forRoot(),
      ],
      declarations: [
        ChartsComponent,
        ChartSummaryComponent,
        ChartHeaderComponent,
        SalesChartComponent,
        ProfitChartComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
