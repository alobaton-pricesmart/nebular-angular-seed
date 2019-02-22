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
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
              },
            },
          ],
        },
      };

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
