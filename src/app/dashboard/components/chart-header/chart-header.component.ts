import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'app-chart-header',
  templateUrl: 'chart-header.component.html',
  styleUrls: ['chart-header.component.scss']
})
export class ChartHeaderComponent implements OnInit, OnDestroy {
  @Output() periodChange = new EventEmitter<string>();

  @Input() period: any = [{ value: 'week', text: 'Semanal' }];

  periods: any[] = [
    { value: 'week', text: 'Semanal' },
    { value: 'month', text: 'Mensual' },
    { value: 'year', text: 'Anual' }];
  breakpoints: any;

  settings = {
    singleSelection: true,
    idField: 'value',
    textField: 'text',
    allowSearchFilter: false,
    closeDropDownOnSelection: true
  };

  constructor(private breakpointsService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointsService.getBreakpointsMap();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  changePeriod(event: any): void {
    this.periodChange.emit(event);
  }
}
