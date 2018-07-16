import {Pipe, PipeTransform} from '@angular/core';
import {Author} from '../models/author';
import {BookStatus} from '../enumerates/book-status.enum';

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  transform(status: BookStatus): string {
    return status.toString();
  }
}
/*
@Pipe({name: 'authorName'})
export class AuthorNamePipe implements PipeTransform {
  transform(author: Author): string {
    return author.name;
  }
}
*/
