import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianewsComponent } from './medianews.component';

describe('MedianewsComponent', () => {
  let component: MedianewsComponent;
  let fixture: ComponentFixture<MedianewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedianewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedianewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

