import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHILOSOPHYComponent } from './philosophy.component';

describe('PHILOSOPHYComponent', () => {
  let component: PHILOSOPHYComponent;
  let fixture: ComponentFixture<PHILOSOPHYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PHILOSOPHYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PHILOSOPHYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
