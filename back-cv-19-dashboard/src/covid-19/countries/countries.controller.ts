import { Controller, Get, Param } from '@nestjs/common';

@Controller('/covid-19/countries')
export class CountriesController {
  @Get('/')
  countrys(): string {
    return '';
  }

  @Get('/:id')
  country(@Param() params): string {

    return `${params.id}`;
  }
}
