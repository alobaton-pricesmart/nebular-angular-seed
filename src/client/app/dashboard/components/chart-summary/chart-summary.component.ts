import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-chart-summary',
  templateUrl: 'chart-summary.component.html',
  styleUrls: ['chart-summary.component.css']
})
export class ChartSummaryComponent implements OnInit {

  @Input()
  summary: { title: string; value: number }[];

  constructor() { }

  ngOnInit() {
  }

}
