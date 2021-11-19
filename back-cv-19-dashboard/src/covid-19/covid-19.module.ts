import { CountriesModule } from './countries/countries.module';
import { Covid19Controller } from './covid-19.controller';
import { Covid19Service } from './covid-19.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    CountriesModule,
    HttpModule
  ],
  controllers: [Covid19Controller],
  providers: [Covid19Service],
})
export class Covid19Module {}
