import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css'],
    standalone: true,
    imports: [NgChartsModule]
})
export class BarChartComponent implements OnInit {
  @Input() chartLabel: string = 'Scores'; // Label for the dataset
  @Input() newData: number | null = null; // New incoming data point

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: this.chartLabel }
    ]
  };

  private rawData: number[] = [];

  ngOnInit() {}

  ngOnChanges() {
    if (this.newData !== null) {
      this.addNewData(this.newData);
    }
  }

  addNewData(newScore: number) {
    this.rawData.push(newScore);

    if (this.rawData.length <= 50) {
      this.barChartData.labels = this.rawData.map((_, i) => `#${i + 1}`);
      this.barChartData.datasets[0].data = [...this.rawData];
    } else if (this.rawData.length <= 100) {
      this.updateDataWithSkipping(2);
    } else if (this.rawData.length <= 200) {
      this.updateDataWithSkipping(4);
    } else {
      this.updateDataWithSkipping(8);
    }
  }

  updateDataWithSkipping(skip: number) {
    const reducedData = [];
    const reducedLabels = [];

    for (let i = 0; i < this.rawData.length; i += skip) {
      if (i + skip < this.rawData.length) {
        reducedData.push((this.rawData[i] + this.rawData[i + 1]) / 2);
        reducedLabels.push(`#${i + 1}-${i + skip}`);
      }
    }

    this.barChartData.labels = reducedLabels;
    this.barChartData.datasets[0].data = reducedData;
  }
}
