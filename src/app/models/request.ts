import {Book} from './book';
import {RequestStatus} from '../enumerates/request-status.enum';

export class Request {
  id: number;
  name: string;
  book: Book;
  status: RequestStatus;
}
