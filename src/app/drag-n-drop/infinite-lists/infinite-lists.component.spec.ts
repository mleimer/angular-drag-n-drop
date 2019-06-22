import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteListsComponent } from './infinite-lists.component';

describe('InfiniteListsComponent', () => {
  let component: InfiniteListsComponent;
  let fixture: ComponentFixture<InfiniteListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
