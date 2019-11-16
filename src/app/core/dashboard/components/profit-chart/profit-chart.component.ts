import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'app-profit-chart',
  templateUrl: 'profit-chart.component.html',
  styleUrls: ['profit-chart.component.scss']
})
export class ProfitChartComponent implements OnInit, OnDestroy {
  @Input()
  profits: any;

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) { }

  ngOnInit() {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;


      this.data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false
      };

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
