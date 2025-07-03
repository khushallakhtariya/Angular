import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarContectPageComponent } from './car-contect-page.component';

describe('CarContectPageComponent', () => {
  let component: CarContectPageComponent;
  let fixture: ComponentFixture<CarContectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarContectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarContectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
