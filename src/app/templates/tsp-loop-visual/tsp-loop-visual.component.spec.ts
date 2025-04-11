import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TspLoopVisualComponent } from './tsp-loop-visual.component';

describe('TspLoopVisualComponent', () => {
  let component: TspLoopVisualComponent;
  let fixture: ComponentFixture<TspLoopVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TspLoopVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TspLoopVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
