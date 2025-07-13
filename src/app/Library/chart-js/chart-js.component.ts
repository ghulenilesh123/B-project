
import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
   selector: 'app-chart-js',
   templateUrl: './chart-js.component.html',
   styleUrls: ['./chart-js.component.css'],
  template: `<canvas baseChart
                      [data]="data"
                      [options]="options"
                      [type]="'bar'">
             </canvas> `
})
export class ChartJsComponent {
  data: ChartData<'bar'> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3],
        backgroundColor: ['#f00','#00f','#ff0']
      }
    ]
  };

  options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Demo Bar Chart' }
    }
  };
}

