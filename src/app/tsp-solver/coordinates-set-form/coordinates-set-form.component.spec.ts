import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesSetFormComponent } from './coordinates-set-form.component';

describe('CoordinatesSetFormComponent', () => {
  let component: CoordinatesSetFormComponent;
  let fixture: ComponentFixture<CoordinatesSetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatesSetFormComponent]
    });
    fixture = TestBed.createComponent(CoordinatesSetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
