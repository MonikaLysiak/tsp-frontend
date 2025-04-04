import { Component, OnInit } from '@angular/core';
import { TspService, TspRequest, TspResponse } from '../services/tsp.service';
import { GeneticParamsFormComponent } from './genetic-params-form/genetic-params-form.component';
import { CsvUploadFormComponent } from './csv-upload-form/csv-upload-form.component';
import { CommonModule, NgIf } from '@angular/common';
import { TspSignalrService } from '../services/tsp-signalr.service';
import { BarChartComponent } from "../templates/bar-chart/bar-chart.component";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-tsp-solver',
    templateUrl: './tsp-solver.component.html',
    styleUrls: ['./tsp-solver.component.css'],
    standalone: true,
    imports: [NgIf, CsvUploadFormComponent, GeneticParamsFormComponent, BarChartComponent, CommonModule]
})
export class TspSolverComponent implements OnInit {
  chart1Data: number | null = null;
  chart2Data: number | null = null;

  request: TspRequest = {
    filePath: 'C:\\Users\\k1212\\Documents\\GeneticTSP\\tsp-solver\\data\\Dane_TSP_48.csv',
    populationSize: 80000,
    mutationRate: 0.05,
    generations: 100,
    crossoverProbability: 0.9,
    mutationChance: 0.05,
    tournamentSize: 70,
    crossoverMethod: 'TWO_POINT',
    tournamentMethod: 'BEST_RANDOM'
  };

  response: TspResponse | null = null;
  loading = false;
  errorMessage = '';

  constructor(private tspService: TspService, public signalRService: TspSignalrService) {}

  ngOnInit() {
    this.signalRService.dataStream.subscribe((newScore: number | null) => {
      if (newScore !== null) {
        if (Math.random() > 0.5) {
          this.chart1Data = newScore;
        } else {
          this.chart2Data = newScore;
        }
      }
    });
  }

  solveTsp() {
    this.loading = true;
    this.errorMessage = '';

    this.tspService.solveTsp(this.request).subscribe({
      next: (data) => {
        this.response = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to solve TSP!';
        this.loading = false;
      }
    });
  }

  stopTsp() {
    this.tspService.stopTsp().subscribe({
      error: (err) => {
        this.errorMessage = 'Failed to stop TSP!';
      }
    });
  }

  handleValidatedFile(file: File) {
    console.log('Valid file received:', file);
  }
}
