import { CountriesService } from './countries.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/covid-19/countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}

  @Get('/')
  countrys() {
    return this.countriesService.allCountriesCovidData();
  }

  @Get('/:id')
  country(@Param() params) {
    return this.countriesService.countryCovidData(params.id);
  }
}
