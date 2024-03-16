import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INNOVATIONComponent } from './innovation.component';

describe('INNOVATIONComponent', () => {
  let component: INNOVATIONComponent;
  let fixture: ComponentFixture<INNOVATIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INNOVATIONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(INNOVATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
