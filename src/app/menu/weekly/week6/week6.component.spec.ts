import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week6Component } from './week6.component';

describe('Week6Component', () => {
  let component: Week6Component;
  let fixture: ComponentFixture<Week6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
