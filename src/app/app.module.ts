import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TspSolverComponent } from './tsp-solver/tsp-solver.component';
import { GeneticParamsFormComponent } from './tsp-solver/genetic-params-form/genetic-params-form.component';
import { CsvUploadFormComponent } from './tsp-solver/csv-upload-form/csv-upload-form.component';
import { CoordinatesSetFormComponent } from './tsp-solver/coordinates-set-form/coordinates-set-form.component';
import { ResultChartsComponent } from './tsp-solver/result-charts/result-charts.component';
import { ResultMapComponent } from './tsp-solver/result-map/result-map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TspSolverComponent,
    GeneticParamsFormComponent,
    CsvUploadFormComponent,
    CoordinatesSetFormComponent,
    ResultChartsComponent,
    ResultMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
