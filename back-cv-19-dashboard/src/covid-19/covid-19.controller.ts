import { Covid19Service } from './covid-19.service';
import { Controller, Get } from '@nestjs/common';

@Controller('covid-19')
export class Covid19Controller {
  constructor(private cv19Service: Covid19Service) {}
  @Get('/')
  all() {
    return this.cv19Service.allCovidData();
  }

  @Get('/per-day')
  allPerDay() {
    return this.cv19Service.allCovidDataPerDay();
  }

  @Get('/graphics')
  graphics() {
    console.log(this.cv19Service.graphicsData())
    return this.cv19Service.graphicsData()
  }
}
