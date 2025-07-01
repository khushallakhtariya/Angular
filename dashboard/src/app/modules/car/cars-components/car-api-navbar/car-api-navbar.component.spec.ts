import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarApiNavbarComponent } from './car-api-navbar.component';

describe('CarApiNavbarComponent', () => {
  let component: CarApiNavbarComponent;
  let fixture: ComponentFixture<CarApiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarApiNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarApiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
