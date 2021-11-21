import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataTable: any;
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: any[] = [];
  @Input() paginatorOptions: any[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator:
    | MatPaginator
    | undefined;

  constructor() {}

  ngOnInit(): void {
    this.dataTable = new MatTableDataSource(this.dataSource);
    this.dataTable.sort = this.sort;
    this.dataTable.paginator = this.paginator;
  }
}
