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

  constructor(private prxoyCovidDataService: ProxyCovidDataService) {}

  ngOnInit(): void {
    this.prxoyCovidDataService.graphicsData().subscribe((response: any) => {
      this.charts = response;
    });
    this.prxoyCovidDataService.allCountriesData().subscribe((response: any) => {
      this.countriesDataSource = response;
    });
  }
}
