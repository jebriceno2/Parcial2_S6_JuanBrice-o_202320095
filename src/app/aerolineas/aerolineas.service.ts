import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aerolineas } from './aerolineas';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AerolineasService {
  private apiUrl =  environment.baseUrl;

  constructor(private http: HttpClient) {}

  getSeries(): Observable<Aerolineas[]> {
    return this.http.get<Aerolineas[]>(this.apiUrl);
  }
}
