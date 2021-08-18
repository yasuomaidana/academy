import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Month4Component } from './month4.component';

describe('Month4Component', () => {
  let component: Month4Component;
  let fixture: ComponentFixture<Month4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Month4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Month4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
