import { Injectable } from '@angular/core';
import {Author} from '../models/author';
import {Book} from '../models/book';
import {BookStatus} from '../enumerates/book-status.enum';
import {forEach} from '@angular/router/src/utils/collection';
import {current} from 'codelyzer/util/syntaxKind';

const AUTHORS: Author[] = [
  { id: 1, name: 'Ayn', surname: 'Rand'},
  { id: 2, name: 'Ernest', surname: 'Hemingway'},
  { id: 3, name: 'Joan', surname: 'Didon'},
  { id: 4, name: 'Ray', surname: 'Bradbury'},
  { id: 5, name: 'George', surname: 'Martin'},
  { id: 6, name: 'Vladimir', surname: 'Nabokov'},
  { id: 7, name: 'Mark', surname: 'Twain'},
  { id: 8, name: 'Erick', surname: 'Larson'}
];

export const BOOKS: Book[] = [
  { id: 11, title: 'Hhsh', author: AUTHORS[1], price: 456, publicationDate:  Date.parse('11-12-2016'), recieptDate: Date.parse('12/12/2015'), status: BookStatus.ABSENT, description: ''},
  { id: 12, title: 'HERw', author: AUTHORS[1], price: 456, publicationDate: Date.parse('03-03-2010'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 13, title: 'hdfjj', author: AUTHORS[2], price: 78, publicationDate: Date.parse('08-04-2012'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 14, title: 'stjs', author: AUTHORS[3], price: 123, publicationDate: Date.parse('07-06-2015'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 15, title: 'ert', author: AUTHORS[4], price: 45, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 16, title: 'zsdfgh', author: AUTHORS[5], price: 45, publicationDate: Date.parse('03-02-2018'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 17, title: 'djz', author: AUTHORS[6], price: 34, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 18, title: 'dfjzs', author: AUTHORS[7], price: 1223, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 19, title: 'sray', author: AUTHORS[2], price: 12453, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 20, title: 'etshdf', author: AUTHORS[1], price: 17823, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 21, title: 'gjfgk', author: AUTHORS[3], price: 456, publicationDate: Date.parse('05-06-2010'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 22, title: 'sdge', author: AUTHORS[6], price: 123, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 23, title: 'wetfh', author: AUTHORS[5], price: 123, publicationDate: Date.parse('01-06-2018'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 24, title: 'dfhdfj', author: AUTHORS[1], price: 456, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 25, title: 'sry', author: AUTHORS[2], price: 123, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 26, title: 'zdfjh', author: AUTHORS[0], price: 8, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 27, title: 'ryha', author: AUTHORS[0], price: 64, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 28, title: 'dffj', author: AUTHORS[5], price: 123, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 29, title: 'weysd', author: AUTHORS[0], price: 34, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 30, title: 'sha', author: AUTHORS[0], price: 123, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 31, title: 'haserjh', author: AUTHORS[2], price: 86, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 32, title: 'gfjf', author: AUTHORS[1], price: 546, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 33, title: 'HERw', author: AUTHORS[1], price: 877, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 34, title: 'hdfglfjj', author: AUTHORS[2], price: 486, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 35, title: 'u', author: AUTHORS[3], price: 786, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 36, title: 'fghk', author: AUTHORS[4], price: 4577, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 37, title: 'zsdfgh', author: AUTHORS[5], price: 4785, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 38, title: 'ity', author: AUTHORS[6], price: 3784, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 39, title: 'gkl', author: AUTHORS[7], price: 178223, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 40, title: 'j', author: AUTHORS[2], price: 1247853, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 41, title: 'hgkl', author: AUTHORS[1], price: 178723, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 42, title: 'dfgh', author: AUTHORS[3], price: 4576, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 43, title: 'khgl', author: AUTHORS[6], price: 1283, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 44, title: 'hgjd', author: AUTHORS[6], price: 1623, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 45, title: 'rts', author: AUTHORS[1], price: 47856, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 46, title: 'fgk', author: AUTHORS[2], price: 12683, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 47, title: 'sjkhlk', author: AUTHORS[0], price: 878, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 48, title: 'jhl', author: AUTHORS[0], price: 67864, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 49, title: 'hjluy', author: AUTHORS[5], price: 178623, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 50, title: 'tylhg', author: AUTHORS[0], price: 3784, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 51, title: 'hglghl', author: AUTHORS[0], price: 16723, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 52, title: 'fgkf', author: AUTHORS[2], price: 8786, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 53, title: 'dfhk', author: AUTHORS[1], price: 45686, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 54, title: 'fgjl', author: AUTHORS[1], price: 45786, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 55, title: 'dfyg', author: AUTHORS[2], price: 7788, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 56, title: 'dytl', author: AUTHORS[3], price: 1263, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 57, title: 'rt', author: AUTHORS[4], price: 47865, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 58, title: 'sert', author: AUTHORS[5], price: 47865, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 59, title: 'lytf', author: AUTHORS[6], price: 3477, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 60, title: 'dhgl', author: AUTHORS[7], price: 122387, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 61, title: 'ktsr', author: AUTHORS[2], price: 1287453, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 62, title: 'yktd', author: AUTHORS[1], price: 176823, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 63, title: 'lyd', author: AUTHORS[3], price: 45786, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 64, title: 'ryk', author: AUTHORS[6], price: 1263, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 65, title: 'sgu', author: AUTHORS[7], price: 1273, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 66, title: 'sery', author: AUTHORS[1], price: 44556, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 67, title: 'tsyls', author: AUTHORS[2], price: 16423, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 68, title: 'srtk', author: AUTHORS[0], price: 788, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 69, title: 'rtse', author: AUTHORS[0], price: 664, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 70, title: 'dffrstjj', author: AUTHORS[5], price: 17823, publicationDate: Date.parse('11-12-2016'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 71, title: 'weyrsyksd', author: AUTHORS[0], price: 3874, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.ABSENT, description: ''},
  { id: 72, title: 'shserta', author: AUTHORS[0], price: 12783, publicationDate: Date.parse('03-06-2018'), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''},
  { id: 73, title: 'srt', author: AUTHORS[2], price: 8676, publicationDate: new Date(), recieptDate: new Date(), status: BookStatus.AVAILABLE, description: ''}
];

@Injectable({
  providedIn: 'root'
})
export class MockBooksService {
  staleBooks: Book[];
  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }

  getStaleBooks(): Book[] {
    this.staleBooks = [];
    const now = new Date();

    for (const book of BOOKS) {
      if ((now.getFullYear() * 12 + now.getMonth()) - (book.recieptDate.getFullYear() * 12 + book.recieptDate.getMonth()) >= 6) {
        this.staleBooks.push(book);
      }
    }

    return this.staleBooks;
  }
}

/*if ((currentDate.getYear() * 12 + currentDate.getMonthValue()) -
  (book.getRecieptDate().getYear() * 12 + book.getRecieptDate().getMonthValue()) >= 6) {
  staleBooks.add(book);
}*/
