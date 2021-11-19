import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class Covid19Service {
  constructor(private httpService: HttpService) {}

  allCovidData(): Observable<any> {
    return this.httpService
      .get(`${process.env.API_BASE_COVID}/all`)
      .pipe(map((response) => response.data));
  }

  allCovidDataPerDay(): Observable<any> {
    return this.httpService
      .get(`${process.env.API_BASE_COVID}/historical/all`)
      .pipe(map((response) => response.data));
  }

  allCountriesCovidData(): Observable<any> {
    return this.httpService
      .get(`${process.env.API_BASE_COVID}/countries`)
      .pipe(map((response) => response.data));
  }

  countryCovidData(country: string = 'usa'): Observable<any> {
    return this.httpService
      .get(`${process.env.API_BASE_COVID}/countries/${country}`)
      .pipe(map((response) => response.data));
  }

  graphicsData() {
    return this.allCovidDataPerDay().pipe(
      map((history) => {

        const response = [];

        for (const key in history) {
          if (Object.prototype.hasOwnProperty.call(history, key)) {
            const element = history[key];
            let labels = [];
            let data = [];
            Object.keys(element).forEach(key => {
              labels.push(key);
              data.push(element[key]);
            });
            const obj = {
              labels,
              datasets: [{
                label: key,
                data,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
            }
            response.push(obj);
          }
        }

        return response;
      }),
    );
  }
}