import {Pipe, PipeTransform} from '@angular/core';
import {Author} from '../models/author';

@Pipe({name: 'authorName'})
export class AuthorNamePipe implements PipeTransform {
  transform(author: Author): string {
    return author.name + ' ' + author.surname;
  }
}

