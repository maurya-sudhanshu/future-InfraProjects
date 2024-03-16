import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietalComponent } from './societal.component';

describe('SocietalComponent', () => {
  let component: SocietalComponent;
  let fixture: ComponentFixture<SocietalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
