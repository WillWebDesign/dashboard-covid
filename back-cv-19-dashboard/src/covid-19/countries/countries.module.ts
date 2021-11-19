import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService]
})
export class CountriesModule {}
