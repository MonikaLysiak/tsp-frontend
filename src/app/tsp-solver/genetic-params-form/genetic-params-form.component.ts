import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrossoverMethod } from 'src/app/enums/crossover-method';
import { TournamentMethod } from 'src/app/enums/tournament-method';
import { GeneticParameters } from 'src/app/models/genetic-parameters';

@Component({
  selector: 'app-genetic-params-form',
  templateUrl: './genetic-params-form.component.html',
  styleUrls: ['./genetic-params-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GeneticParamsFormComponent {
  geneticForm: FormGroup;

  // Enums for dropdowns
  tournamentMethods = Object.values(TournamentMethod);
  crossoverMethods = Object.values(CrossoverMethod);

  // Default values
  defaultParams: GeneticParameters = {
    populationSize: 80000,
    tournamentSize: 70,
    maxGenerations: 100,
    chanceOfNodeMutating: 0.05,
    crossOverProbability: 0.9,
    tournamentMethod: TournamentMethod.BEST_RANDOM,
    crossoverMethod: CrossoverMethod.TWO_POINT
  };

  constructor(private fb: FormBuilder) {
    this.geneticForm = this.fb.group({
      populationSize: [this.defaultParams.populationSize, [Validators.required, Validators.min(10), Validators.max(100000)]],
      tournamentSize: [this.defaultParams.tournamentSize, [Validators.required, Validators.min(1), Validators.max(500)]],
      maxGenerations: [this.defaultParams.maxGenerations, [Validators.required, Validators.min(1), Validators.max(10000)]],
      chanceOfNodeMutating: [this.defaultParams.chanceOfNodeMutating, [Validators.required, Validators.min(0), Validators.max(1)]],
      crossOverProbability: [this.defaultParams.crossOverProbability, [Validators.required, Validators.min(0), Validators.max(1)]],
      tournamentMethod: [this.defaultParams.tournamentMethod, Validators.required],
      crossoverMethod: [this.defaultParams.crossoverMethod, Validators.required]
    });
  }

  // Reset form to default values
  resetToDefaults() {
    this.geneticForm.setValue(this.defaultParams);
  }

  // Submit form
  onSubmit() {
    if (this.geneticForm.valid) {
      const params: GeneticParameters = this.geneticForm.value;
      console.log('Submitted Parameters:', params);
      // Send the params to backend or parent component
    } else {
      console.log('Form is invalid');
    }
  }
}
