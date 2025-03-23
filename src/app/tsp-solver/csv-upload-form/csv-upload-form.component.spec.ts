import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvUploadFormComponent } from './csv-upload-form.component';

describe('CsvUploadFormComponent', () => {
  let component: CsvUploadFormComponent;
  let fixture: ComponentFixture<CsvUploadFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsvUploadFormComponent]
    });
    fixture = TestBed.createComponent(CsvUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
