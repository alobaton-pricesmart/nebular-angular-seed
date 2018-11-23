import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-charts',
  templateUrl: 'charts.component.html',
  styleUrls: ['charts.component.css']
})
export class ChartsComponent implements OnInit {

  period = 'week';
  summary: Array<any> = [{ title: 'Ventas', value: 100 }];
  sales: any;
  profits: any;

  constructor() {

  }

  ngOnInit() {
  }

  changeTab(event: any) {

  }

  onPeriodChange(event: any) {

  }

}
