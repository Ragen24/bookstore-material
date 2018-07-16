
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNavComponent } from './request-nav.component';

describe('RequestNavComponent', () => {
  let component: RequestNavComponent;
  let fixture: ComponentFixture<RequestNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
