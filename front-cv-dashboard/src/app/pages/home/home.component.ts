import { ProxyCovidDataService } from '../../services/proxy-covid-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  charts: any[] = [];

  constructor(private prxoyCovidDataService: ProxyCovidDataService) {}

  ngOnInit(): void {
    this.prxoyCovidDataService.graphicsData().subscribe((response: any) => {
      this.charts = response;
    });
  }
}
