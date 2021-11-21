import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../material.module';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModule, ComponentsModule],
  exports: [],
})
export class HomeModule {}
