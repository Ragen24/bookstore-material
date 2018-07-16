
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNavComponent } from './book-nav.component';

describe('BookNavComponent', () => {
  let component: BookNavComponent;
  let fixture: ComponentFixture<BookNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
