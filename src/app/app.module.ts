import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookNavComponent } from './book-nav/book-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatButtonToggleModule, MatTabsModule } from '@angular/material';
import { OrderNavComponent } from './order-nav/order-nav.component';
import { RequestNavComponent } from './request-nav/request-nav.component';
import { BookTableComponent } from './book-table/book-table.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { RequestTableComponent } from './request-table/request-table.component';
import { MainComponent } from './main/main.component';
import {AuthorNamePipe} from './pipes/author-name.pipe';
import {StatusPipe} from './pipes/status.pipe';
import {BookTableDataSource} from './book-table/book-table-datasource';

const appRoutes: Routes = [
  { path: '', redirectTo: '/book-menu', pathMatch: 'full'},
  {
    path: 'book-menu',
    component: BookNavComponent,
    children: [
      {
        path: '',
        component: BookTableComponent,
        outlet: 'bookOutlet'
      }
    ]
  },
  {path: 'order-menu', component: OrderNavComponent},
  {path: 'request-menu', component: RequestNavComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookNavComponent,
    OrderNavComponent,
    RequestNavComponent,
    BookTableComponent,
    OrderTableComponent,
    RequestTableComponent,
    MainComponent,
    StatusPipe,
    AuthorNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
