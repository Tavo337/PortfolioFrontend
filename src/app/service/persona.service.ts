import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://localhost:8080/personas/';

  constructor(private http: HttpClient) { }
  public getPersona (): Observable<personas> {
    
  }

