import { ProxyCovidDataService } from '../../services/proxy-covid-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  charts: any[] = [];
  countriesDataSource: any;
  countriesDisplayedColumns: string[] = [
    'cases',
    'todayCases',
    'recovered',
    'todayRecovered',
    'deaths',
    'todayDeaths',
    'tests',
    'testsPerOneMillion',
    'date',
    'active',
    'critical',
    'country',
  ];
  dataPerDayDataSource: any;
  dataPerDayDisplayedColumns: string[] = [
    'date',
    'cases',
    'deaths',
    'recovered',
  ];

  constructor(private proxyCovidDataService: ProxyCovidDataService) {}

  ngOnInit(): void {
    this.proxyCovidDataService.graphicsData().subscribe((response: any) => {
      this.charts = response;
    });
    this.proxyCovidDataService.allCountriesData().subscribe((response: any) => {
      this.countriesDataSource = response;
    });
    this.proxyCovidDataService.allDataPerDay().subscribe((response: any) => {
      this.dataPerDayDataSource = response;
    });
  }
}
