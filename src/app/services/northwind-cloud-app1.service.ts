import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class NorthwindCloudApp1Service {
  constructor(private http: HttpClient) { }

  public getApiCustomers(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/customers`);
  }
}
