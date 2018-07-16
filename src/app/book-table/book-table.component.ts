import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BookTableDataSource } from './book-table-datasource';
import {Book} from '../models/book';

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: BookTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'author', 'price', 'status', 'publDate'];

  ngOnInit() {
    this.dataSource = new BookTableDataSource(this.paginator, this.sort);
  }

  showAllBooks(): void {
    this.dataSource.filterPredicate = (data: Book, filter: string) => { return true; };
  }

  showStaleBooks(): void {
    this.dataSource.filterPredicate =
      (data: Book, filter: string) => {
        const now =  new Date();
        return (now.getFullYear() * 12 + now.getMonth()) - (data.publicationDate.getFullYear() * 12 + data.publicationDate.getMonth()) >= 6;
      };
  }

}
