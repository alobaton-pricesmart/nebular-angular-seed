import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-summary',
  templateUrl: 'chart-summary.component.html',
  styleUrls: ['chart-summary.component.scss']
})
export class ChartSummaryComponent implements OnInit {

  @Input()
  summary: { title: string; value: number }[];

  constructor() { }

  ngOnInit() {
  }

}
