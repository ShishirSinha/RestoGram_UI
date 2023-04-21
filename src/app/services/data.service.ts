import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getDataApi(url: string, options?: any) {
    return this.http.get<any>(url, options);
  }

  public postDataApi(url: string, payload: any, options?: any) {
    return this.http.post<any>(url, payload, options);
  }
}
