import { Component } from '@angular/core';
import { TspService, TspRequest, TspResponse } from '../services/tsp.service';

@Component({
  selector: 'app-tsp-solver',
  templateUrl: './tsp-solver.component.html',
  styleUrls: ['./tsp-solver.component.css']
})
export class TspSolverComponent {
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

  constructor(private tspService: TspService) {}

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
