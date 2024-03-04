import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {
  baseUrl = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  // get(url: any): Observable<any> {
  //   return this.http.get('https://6425c05c556bad2a5b4201da.mockapi.io/tasks');
  // }

  // post(data: any): Observable<any> {
  //   return this.http.post(
  //     'https://6425c05c556bad2a5b4201da.mockapi.io/students',
  //     data
  //   );
  // }

  // put(data: any, id: any): Observable<any> {
  //   return this.http.put(
  //     `https://6425c05c556bad2a5b4201da.mockapi.io/tasks/${id}`,
  //     data
  //   );
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(
  //     `https://6425c05c556bad2a5b4201da.mockapi.io/tasks/${id}`
  //   );
  // }

  // method to set different headers
  public header() {
    // const authToken = this.token.getToken();
    const authToken = 'mytoken';
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/json');
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Authorization', 'Bearer ' + authToken);

    return headers;
  }

  // methods for CRUD operations on different resources
  public get(path: string, base?: number): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.get(path, { headers: this.header() });
  }

  public post(path: string, data: any, base?: number): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.post(path, data || {}, { headers: this.header() });
  }

  public put(path: string, data: any): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.put(path, data || {}, { headers: this.header() });
  }

  public patch(path: string, data: any): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.patch(path, data || {}, { headers: this.header() });
  }

  public delete(path: string): Observable<any> {
    path = `${this.baseUrl}/${path}`;
    return this.httpClient.delete(path, { headers: this.header() });
  }
}
