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
      .get(`${process.env.API_BASE_COVID}/historical/all?lastdays=all`)
      .pipe(
        map((response) => {
          const object = response.data;
          let responseArr = [];
          for (const keyTop in object) {
            if (Object.prototype.hasOwnProperty.call(object, keyTop)) {
              const element = object[keyTop];
              for (const key in element) {
                if (Object.prototype.hasOwnProperty.call(element, key)) {
                  const value = element[key];
                  let objTemp = {
                    date: key,
                    [keyTop]: value,
                  };
                  responseArr.push(objTemp);
                }
              }
            }
          }
          let grouped = [];
          let th = {};
          responseArr.forEach((item) => {
            if (!th[item.date]) {
              th[item.date] = { date: item.date };
              grouped.push(th[item.date]);
            }
            th[item.date] = Object.assign(th[item.date], item);
          });
          return grouped;
        }),
      );
  }

  graphicsData() {
    return this.httpService
      .get(`${process.env.API_BASE_COVID}/historical/all?lastdays=all`)
      .pipe(
        map((res) => {
          const history = res.data;
          const response = [];

          for (const key in history) {
            if (Object.prototype.hasOwnProperty.call(history, key)) {
              const element = history[key];
              let labels = [];
              let data = [];
              Object.keys(element).forEach((key) => {
                labels.push(key);
                data.push(element[key]);
              });
              const obj = {
                labels,
                datasets: [
                  {
                    label: key,
                    data,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1,
                  },
                ],
              };
              response.push(obj);
            }
          }

          return response;
        }),
      );
  }
}
