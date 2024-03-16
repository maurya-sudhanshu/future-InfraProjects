import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianccComponent } from './mediancc.component';

describe('MedianccComponent', () => {
  let component: MedianccComponent;
  let fixture: ComponentFixture<MedianccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedianccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedianccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
