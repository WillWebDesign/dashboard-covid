import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule],
  exports: [],
  providers: [],
})
export class PagesModule {}
