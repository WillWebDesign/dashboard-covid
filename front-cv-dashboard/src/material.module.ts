import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class MaterialModule {}
