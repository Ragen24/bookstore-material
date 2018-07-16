import { BookStatus} from '../enumerates/book-status.enum';
import { Author } from './author';

export class Book {
  id: number;
  title: string;
  author: Author;
  price: number;
  publicationDate: Date;
  recieptDate: Date;
  status: BookStatus;
  description: string;
}





