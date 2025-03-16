export interface TspRequest {
  filePath: string;
  populationSize: number;
  mutationRate: number;
  generations: number;
  crossoverProbability: number;
  mutationChance: number;
  tournamentSize: number;
  crossoverMethod: string;
  tournamentMethod: string;
}