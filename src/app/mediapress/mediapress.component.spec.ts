import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediapressComponent } from './mediapress.component';

describe('MediapressComponent', () => {
  let component: MediapressComponent;
  let fixture: ComponentFixture<MediapressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediapressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediapressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
