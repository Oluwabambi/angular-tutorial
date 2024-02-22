import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor( private http: HttpClient ) { }

  get(): Observable<any> {
    return this.http.get('https://6425c05c556bad2a5b4201da.mockapi.io/tasks');
  }

  post(data: any): Observable<any> {
    return this.http.post('https://6425c05c556bad2a5b4201da.mockapi.io/students', data)
  }
}
