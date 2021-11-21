import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProxyCovidDataService {
  url: string = environment.api_proxy_data;

  constructor(private http: HttpClient) {}
  graphicsData() {
    return this.http.get(`${this.url}/covid-19/graphics`);
  }
}
