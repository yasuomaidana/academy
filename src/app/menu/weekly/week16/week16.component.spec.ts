import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week16Component } from './week16.component';

describe('Week16Component', () => {
  let component: Week16Component;
  let fixture: ComponentFixture<Week16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
