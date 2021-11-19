import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Covid19Module } from './covid-19/covid-19.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    Covid19Module,
    ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
