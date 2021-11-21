import { ProxyCovidDataService } from '../../services/proxy-covid-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  charts: any[] = [];
  dataSource: any[] = [];
  displayedColumns: string[] = [
    'table-cases',
    'table-todayCases',
    'table-recovered',
    'table-todayRecovered',
    'table-deaths',
    'table-todayDeaths',
    'table-tests',
    'table-testsPerOneMillion',
    'table-date',
    'table-active',
    'table-critical',
    'table-country',
  ];

  constructor(private prxoyCovidDataService: ProxyCovidDataService) {}

  ngOnInit(): void {
    this.prxoyCovidDataService.graphicsData().subscribe((response: any) => {
      this.charts = response;
    });
    this.prxoyCovidDataService.allCountriesData().subscribe((response: any) => {
      this.dataSource = response;
    });
  }
}
