import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() chartLabel: string = 'Scores';
  @Input() newData: number | null = null;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ data: [], label: this.chartLabel }]
  };

  private rawData: number[] = [];
  private displayedData: number[] = [];
  private displayedLabels: string[] = [];
  private skipFactor: number = 1;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newData'] && this.newData !== null) {
      this.addNewData(this.newData);
    }
  }

  private addNewData(newScore: number) {
    this.rawData.push(newScore);

    switch (this.rawData.length) {
      case 20:
        this.skipFactor = 2;
        break;
      case 40:
        this.skipFactor = 4;
        break;
      case 80:
        this.skipFactor = 8;
        break;
      case 160:
        this.skipFactor = 16;
        break;
    }

    if (this.rawData.length > 40) {
      this.skipFactor = 4;
    } else if (this.rawData.length > 20) {
      this.skipFactor = 2;
    } else {
      this.skipFactor = 1;
    }

    this.updateDisplayedData();
  }

  private updateDisplayedData() {
    this.displayedData = [];
    this.displayedLabels = [];

    for (let i = 0; i < this.rawData.length; i += this.skipFactor) {
      if (this.skipFactor === 1) {
        this.displayedData.push(this.rawData[i]);
        this.displayedLabels.push(`#${i + 1}`);
      } else {
        let sum = 0;
        let count = 0;
        for (let j = 0; j < this.skipFactor && i + j < this.rawData.length; j++) {
          sum += this.rawData[i + j];
          count++;
        }
        this.displayedData.push(sum / count);
        this.displayedLabels.push(`#${i + 1}-${i + this.skipFactor}`);
      }
    }

    this.barChartData = {
      labels: [...this.displayedLabels],
      datasets: [{ data: [...this.displayedData], label: this.chartLabel }]
    };
  }
}
