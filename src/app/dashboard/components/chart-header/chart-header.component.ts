import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'app-chart-header',
  templateUrl: 'chart-header.component.html',
  styleUrls: ['chart-header.component.scss']
})
export class ChartHeaderComponent implements OnInit, OnDestroy {
  @Output() periodChange = new EventEmitter<string>();

  @Input() period: any = 'week';

  periods: any[] = [
    { value: 'week', text: 'Semanal' },
    { value: 'month', text: 'Mensual' },
    { value: 'year', text: 'Anual' }];
  breakpoints: any;

  constructor(private breakpointsService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointsService.getBreakpointsMap();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  changePeriod(period: string): void {
    this.period = period;
    this.periodChange.emit(period);
  }

  getPeriodText(period: string): string {
    for (let i = 0; i < this.periods.length; i++) {
      if (period === this.periods[i].value) {
        return this.periods[i].text;
      }
    }
    return '';
  }
}
