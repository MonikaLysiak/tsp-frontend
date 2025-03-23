import { TestBed } from '@angular/core/testing';

import { TspSignalrService } from './tsp-signalr.service';

describe('TspSignalrService', () => {
  let service: TspSignalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TspSignalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
