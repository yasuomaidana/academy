import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week19Component } from './week19.component';

describe('Week19Component', () => {
  let component: Week19Component;
  let fixture: ComponentFixture<Week19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
