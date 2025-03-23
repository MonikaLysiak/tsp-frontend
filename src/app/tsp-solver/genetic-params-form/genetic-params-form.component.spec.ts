import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticParamsFormComponent } from './genetic-params-form.component';

describe('GeneticParamsFormComponent', () => {
  let component: GeneticParamsFormComponent;
  let fixture: ComponentFixture<GeneticParamsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [GeneticParamsFormComponent]
});
    fixture = TestBed.createComponent(GeneticParamsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
