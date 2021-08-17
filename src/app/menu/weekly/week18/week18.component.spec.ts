import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week18Component } from './week18.component';

describe('Week18Component', () => {
  let component: Week18Component;
  let fixture: ComponentFixture<Week18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
