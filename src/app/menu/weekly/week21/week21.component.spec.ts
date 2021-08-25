import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week21Component } from './week21.component';

describe('Week21Component', () => {
  let component: Week21Component;
  let fixture: ComponentFixture<Week21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
