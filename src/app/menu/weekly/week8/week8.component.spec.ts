import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week8Component } from './week8.component';

describe('Week8Component', () => {
  let component: Week8Component;
  let fixture: ComponentFixture<Week8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
