import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BookTableDataSource} from '../book-table/book-table-datasource';
import {BookTableComponent} from '../book-table/book-table.component';

@Component({
  selector: 'book-nav',
  templateUrl: './book-nav.component.html',
  styleUrls: ['./book-nav.component.css']
})
export class BookNavComponent implements OnInit {
  //dataSource: BookTableDataSource;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    public bookTableComponent: BookTableComponent,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit() {
    //this.dataSource = new BookTableDataSource(this.paginator, this.sort);
  }

  showBooks(): void {
    console.log('test');
    this.bookTableComponent.showAllBooks();
  }

  showStaleBooks(): void {
    console.log('test');
    this.bookTableComponent.showStaleBooks();
  }
}
