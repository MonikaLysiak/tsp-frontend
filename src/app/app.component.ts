import { Component } from '@angular/core';
import { TspSolverComponent } from './tsp-solver/tsp-solver.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [TspSolverComponent]
})
export class AppComponent {
  title = 'tsp-frontend';
}
