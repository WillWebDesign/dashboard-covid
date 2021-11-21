import { Component, Input, OnInit } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartItem,
  ChartTypeRegistry,
  registerables,
} from 'chart.js';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
})
export class GraphicComponent implements OnInit {
  @Input() data: any;
  idName: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.idName = `chart-${this.data.datasets[0].label}`;
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    const config: ChartConfiguration<keyof ChartTypeRegistry> = {
      type: 'line',
      data: this.data,
      options: {},
    };
    const ctx = document.getElementById(this.idName) as ChartItem;
    const chart = new Chart(ctx, config);
  }
}
