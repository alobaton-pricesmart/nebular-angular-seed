import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ChartsComponent } from '../charts/charts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { ChartSummaryComponent } from '../chart-summary/chart-summary.component';
import { SalesChartComponent } from '../sales-chart/sales-chart.component';
import { ProfitChartComponent } from '../profit-chart/profit-chart.component';
import { ChartHeaderComponent } from '../chart-header/chart-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule.forRoot(),
        ThemeModule.forRoot(),
      ],
      declarations: [
        DashboardComponent,
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
