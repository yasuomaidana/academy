import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week20Component } from './week20.component';

describe('Week20Component', () => {
  let component: Week20Component;
  let fixture: ComponentFixture<Week20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
