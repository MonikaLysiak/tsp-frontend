import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-csv-upload-form',
    templateUrl: './csv-upload-form.component.html',
    styleUrls: ['./csv-upload-form.component.css'],
    standalone: true,
    imports: [NgIf, MatButtonModule]
})
export class CsvUploadFormComponent {
  @Output() fileValidated = new EventEmitter<File>();
  
  selectedFile: File = {} as File;
  validationMessage: string = '';
  isFileValid: boolean = false;
  isDragging: boolean = false;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.processFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.processFile(event.dataTransfer.files[0]);
    }
  }

  processFile(file: File) {
    if (file.name.endsWith('.csv')) {
      this.selectedFile = file;
      this.validationMessage = 'File is valid!';
      this.isFileValid = true;
    } else {
      this.validationMessage = 'Invalid file format. Please upload a .csv file.';
      this.isFileValid = false;
    }
  }
}
