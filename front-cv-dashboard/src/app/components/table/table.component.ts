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
  tableDataSrc: any;
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: any[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;


  constructor() {}

  ngOnInit(): void{
    this.tableDataSrc = new MatTableDataSource(this.dataSource);
    this.tableDataSrc.sort = this.sort;
    this.tableDataSrc.paginator = this.paginator;
  }
}
