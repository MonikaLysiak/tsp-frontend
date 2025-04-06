import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
  @Input() chartLabel: string = 'Scores';
  @Input() newData: number | null = null;
  @Input() newDataSet: number[] = [];

  public barChartOptions: ChartOptions = {
    
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

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newData'] && this.newData !== null) {
      this.addNewData(this.newData);
    }
    if (changes['newDataSet'] && this.newDataSet.length > 0) {
      this.addNewDataSet(this.newDataSet);
    }
  }

  private addNewData(newData: number) {

    this.rawData.push(newData);

    this.updateDisplayedData();
  }

  private addNewDataSet(newDataSet: number[]) {

    this.rawData = [...newDataSet];

    this.updateDisplayedData();
  }

  private updateDisplayedData() {
    this.displayedData = [];
    this.displayedLabels = [];

    for (let i = 0; i < this.rawData.length; i ++) {
      this.displayedData.push(this.rawData[i]);
      this.displayedLabels.push(`#${i + 1}`);
    }

    this.barChartData.datasets[0].data = [...this.displayedData];

    this.barChartData.labels = [...this.displayedLabels];

    this.chart?.update();

  }
}
