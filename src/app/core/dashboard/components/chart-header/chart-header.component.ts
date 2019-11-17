import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'app-chart-header',
  templateUrl: 'chart-header.component.html',
  styleUrls: ['chart-header.component.scss']
})
export class ChartHeaderComponent implements OnInit, OnDestroy {
  @Output() periodChange = new EventEmitter<string>();

  period: any = { value: 'week', text: 'Semanal' };

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

  changePeriod(event: any): void {
    this.period = event;
    this.periodChange.emit(event);
  }
}
