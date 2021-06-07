import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week7Component } from './week7.component';

describe('Week7Component', () => {
  let component: Week7Component;
  let fixture: ComponentFixture<Week7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
