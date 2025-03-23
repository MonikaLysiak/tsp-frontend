import { CrossoverMethod } from "../enums/crossover-method";
import { TournamentMethod } from "../enums/tournament-method";

export interface GeneticParameters {
    populationSize: number;
    tournamentSize: number;
    maxGenerations: number;
    chanceOfNodeMutating: number;
    crossOverProbability: number;
    tournamentMethod: TournamentMethod;
    crossoverMethod: CrossoverMethod;
}
