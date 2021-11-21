import { GraphicComponent } from './graphic/graphic.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GraphicComponent, TableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [GraphicComponent, TableComponent],
  providers: [],
})
export class ComponentsModule {}
