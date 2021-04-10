import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothlyComponent } from './monthly.component';

describe('MothlyComponent', () => {
  let component: MothlyComponent;
  let fixture: ComponentFixture<MothlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MothlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MothlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
