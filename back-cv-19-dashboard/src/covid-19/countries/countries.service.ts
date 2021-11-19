import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private httpService: HttpService) {}

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
}
