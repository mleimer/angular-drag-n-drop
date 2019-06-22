import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleInputSubmitComponent} from './simple-input-submit.component';

describe('SimpleInputSubmitComponent', () => {
  let component: SimpleInputSubmitComponent;
  let fixture: ComponentFixture<SimpleInputSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleInputSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInputSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
