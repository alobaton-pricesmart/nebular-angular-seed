import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: 'charts.component.html',
  styleUrls: ['charts.component.scss']
})
export class ChartsComponent implements OnInit {

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
