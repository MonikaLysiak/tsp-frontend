import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TspSerpentineVisualComponent } from './tsp-serpentine-visual.component';

describe('TspSerpentineVisualComponent', () => {
  let component: TspSerpentineVisualComponent;
  let fixture: ComponentFixture<TspSerpentineVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TspSerpentineVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TspSerpentineVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
