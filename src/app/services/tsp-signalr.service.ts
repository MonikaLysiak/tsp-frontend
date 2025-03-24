import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TspSignalrService {
  public dataStream = new BehaviorSubject<number | null>(null);
  private counter = 1;

  constructor() {
    this.startMockDataStream();
  }

  private startMockDataStream() {
    interval(500).subscribe(() => {
      if (this.counter <= 10000) {
        this.dataStream.next(this.counter);
        this.counter++;
      }
    });
  }
}
