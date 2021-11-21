import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable, retry } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private httpService: HttpService) {}

  allCountriesCovidData(): Observable<any> {
    return this.httpService.get(`${process.env.API_BASE_COVID}/countries`).pipe(
      map((response) => {
        let res = [];
        response.data.forEach((country) => {
          const dateObject = new Date(country.updated);
          const humanDateFormat = dateObject.toLocaleString();
          let data = {
            country: country.country,
            cases: country.cases,
            todayCases: country.todayCases,
            deaths: country.deaths,
            todayDeaths: country.todayDeaths,
            recovered: country.recovered,
            todayRecovered: country.todayRecovered,
            tests: country.tests,
            testsPerOneMillion: country.testsPerOneMillion,
            active: country.active,
            critical: country.critical,
            date: humanDateFormat,
          };
          res.push(data);
        });
        return res;
      }),
    );
  }

  countryCovidData(country: string = 'usa'): Observable<any> {
    return this.httpService
      .get(`${process.env.API_BASE_COVID}/countries/${country}`)
      .pipe(map((response) => response.data));
  }
}
