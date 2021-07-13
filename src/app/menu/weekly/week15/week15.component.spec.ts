import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week15Component } from './week15.component';

describe('Week15Component', () => {
  let component: Week15Component;
  let fixture: ComponentFixture<Week15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
