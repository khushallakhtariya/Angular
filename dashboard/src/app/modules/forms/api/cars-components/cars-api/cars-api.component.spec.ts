import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsApiComponent } from './cars-api.component';

describe('CarsApiComponent', () => {
  let component: CarsApiComponent;
  let fixture: ComponentFixture<CarsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
