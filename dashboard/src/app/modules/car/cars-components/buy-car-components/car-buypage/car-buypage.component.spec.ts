import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBuypageComponent } from './car-buypage.component';

describe('CarBuypageComponent', () => {
  let component: CarBuypageComponent;
  let fixture: ComponentFixture<CarBuypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarBuypageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBuypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
