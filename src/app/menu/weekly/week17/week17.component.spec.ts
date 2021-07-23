import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week17Component } from './week17.component';

describe('Week17Component', () => {
  let component: Week17Component;
  let fixture: ComponentFixture<Week17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
