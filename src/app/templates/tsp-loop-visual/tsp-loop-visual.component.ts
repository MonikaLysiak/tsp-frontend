import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-tsp-loop-visual',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './tsp-loop-visual.component.html',
  styleUrls: ['./tsp-loop-visual.component.css']
})
export class TspLoopVisualComponent implements OnChanges {
  @Input() route: number[] = [];
  size = 300; // px size of SVG
  positions: { x: number; y: number }[] = [{x: 0, y: 0}]; // positions of the nodes in the SVG

  ngOnChanges() {
    const center = this.size / 2;
    const radius = center - 30;
    const count = this.route.length;
    this.positions = this.route.map((_, i) => {
      const angle = (2 * Math.PI * i) / count;
      return {
        x: center + radius * Math.cos(angle),
        y: center + radius * Math.sin(angle),
      };
    });
  }
}
