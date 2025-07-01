import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLoginComponent } from './car-login.component';

describe('CarLoginComponent', () => {
  let component: CarLoginComponent;
  let fixture: ComponentFixture<CarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
