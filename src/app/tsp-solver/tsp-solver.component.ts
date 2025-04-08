import { Component, OnInit } from '@angular/core';
import { TspService, TspRequest, TspResponse } from '../services/tsp.service';
import { GeneticParamsFormComponent } from './genetic-params-form/genetic-params-form.component';
import { CsvUploadFormComponent } from './csv-upload-form/csv-upload-form.component';
import { CommonModule, NgIf } from '@angular/common';
import { TspSignalrService } from '../services/tsp-signalr.service';
import { BarChartComponent } from "../templates/bar-chart/bar-chart.component";
import { GeneticParameters } from '../models/genetic-parameters';
import { TournamentMethod } from '../enums/tournament-method';
import { CrossoverMethod } from '../enums/crossover-method';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tsp-solver',
  templateUrl: './tsp-solver.component.html',
  styleUrls: ['./tsp-solver.component.css'],
  standalone: true,
  imports: [NgIf, CsvUploadFormComponent, GeneticParamsFormComponent, BarChartComponent, CommonModule]
})
export class TspSolverComponent implements OnInit {
  bestRoute: number[] = [];
  bestRouteCumulativeDistances: number[] = [];
  bestDistance: number = 0;

  request = new TspRequest();

  response: TspResponse | null = null;
  loading = false;
  errorMessage = '';

  constructor(private tspService: TspService, public signalRService: TspSignalrService, private http: HttpClient) { }

  ngOnInit() {
    this.signalRService.onTspUpdate((route, distance) => {
      this.bestRoute = route;
      this.bestRouteCumulativeDistances = this.getCumulativeDistances(route);
      this.bestDistance = distance;
    });

    this.setSampleData();
  }

  setSampleData() {
    const geneticParameters: GeneticParameters = {
      populationSize: 80000,
      tournamentSize: 70,
      maxGenerations: 100,
      chanceOfNodeMutating: 0.05,
      crossOverProbability: 0.9,
      tournamentMethod: TournamentMethod.BEST_RANDOM,
      crossoverMethod: CrossoverMethod.TWO_POINT
    }

    this.request.setGeneticParameters(geneticParameters);

    this.http.get('assets/sample-data/Dane_TSP_48.csv', { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const file = new File([blob], 'Dane_TSP_48.csv', { type: blob.type });
        if (file) {
          this.request.setFile(file);
        }
      });
  }

  getCumulativeDistances(route: number[]): number[] {
    const cumulativeDistances: number[] = [];
    let totalDistance = 0;

    for (let i = 0; i < route.length; i++) {
      totalDistance += route[i];
      cumulativeDistances.push(totalDistance);
    }

    return cumulativeDistances;
  }

  receiveData(data: GeneticParameters) {
    this.request.setGeneticParameters(data);
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
    this.request.setFile(file);
  }
}
