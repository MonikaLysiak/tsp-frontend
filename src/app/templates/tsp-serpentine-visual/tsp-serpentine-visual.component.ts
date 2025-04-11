import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tsp-serpentine-visual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tsp-serpentine-visual.component.html',
  styleUrls: ['./tsp-serpentine-visual.component.css']
})
export class TspSerpentineVisualComponent implements OnChanges {
  @Input() route: number[] = [];
  @Input() columns = 6; // number of cities per row
  grid: { cities: number[]; reverse: boolean }[] = [];

  ngOnChanges(): void {
    this.buildSerpentine();
  }

  buildSerpentine() {
    this.grid = [];
    for (let i = 0; i < this.route.length; i += this.columns) {
      const rowCities = this.route.slice(i, i + this.columns);
      const reverse = Math.floor(i / this.columns) % 2 === 1;
      this.grid.push({ cities: reverse ? [...rowCities].reverse() : rowCities, reverse });
    }
  }

  isLastInRoute(rowIndex: number, cityIndex: number): boolean {
    const totalRows = this.grid.length;
    const isLastRow = rowIndex === totalRows - 1;
    const isLastInRow = cityIndex === this.grid[rowIndex].cities.length - 1;
    return isLastRow && isLastInRow;
  }
}
