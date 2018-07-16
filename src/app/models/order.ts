import {Client} from './client';
import {Book} from './book';
import {OrderStatus} from '../enumerates/order-status.enum';

export class Order {
  id: number;
  client: Client;
  books: Book[] = [];
  price: number;
  status: OrderStatus;
  executionDate: Date = new Date();

}
