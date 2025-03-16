import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TspSolverComponent } from './tsp-solver.component';

describe('TspSolverComponent', () => {
  let component: TspSolverComponent;
  let fixture: ComponentFixture<TspSolverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TspSolverComponent]
    });
    fixture = TestBed.createComponent(TspSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
