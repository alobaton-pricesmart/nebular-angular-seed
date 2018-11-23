import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

@Component({
  moduleId: module.id,
  selector: 'app-sales-chart',
  templateUrl: 'sales-chart.component.html',
  styleUrls: ['sales-chart.component.css']
})
export class SalesChartComponent implements OnInit, OnDestroy {
  @Input()
  sales: any;

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) { }

  ngOnInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
          borderColor: colors.danger,
        }, {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C',
          backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
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
        legend: {
          labels: {
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
