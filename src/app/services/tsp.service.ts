import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TspRequest } from '../models/tsp-request';
import { TspResponse } from '../models/tsp-response';

@Injectable({
  providedIn: 'root'
})
export class TspService {
  private apiUrl = 'http://localhost:5001/api/tsp/solve'; // Backend URL

  constructor(private http: HttpClient) {}

  solveTsp(request: TspRequest): Observable<TspResponse> {
    return this.http.post<TspResponse>(this.apiUrl, request);
  }
}
export { TspRequest, TspResponse };

