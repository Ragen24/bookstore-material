import { TestBed, inject } from '@angular/core/testing';

import { BookDaoService } from './book-dao.service';

describe('BookDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDaoService]
    });
  });

  it('should be created', inject([BookDaoService], (service: BookDaoService) => {
    expect(service).toBeTruthy();
  }));
});
