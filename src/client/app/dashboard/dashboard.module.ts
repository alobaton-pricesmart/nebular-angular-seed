import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartSummaryComponent } from './components/chart-summary/chart-summary.component';
import { ChartHeaderComponent } from './components/chart-header/chart-header.component';
import { ProfitChartComponent } from './components/profit-chart/profit-chart.component';
import { SalesChartComponent } from './components/sales-chart/sales-chart.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

const DASHBOARD_MODULES = [
  DashboardRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot(),
];

const DASHBOARD_COMPONENTS = [
  DashboardComponent,
  ChartsComponent,
  ChartSummaryComponent,
  ChartHeaderComponent,
  ProfitChartComponent,
  SalesChartComponent
];

@NgModule({
  imports: [
    ...DASHBOARD_MODULES
  ],
  declarations: [
    ...DASHBOARD_COMPONENTS
  ]
})
export class DashboardModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [
      ]
    };
  }
}
