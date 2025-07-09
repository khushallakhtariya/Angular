import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNewCarComponent } from './details-new-car.component';

describe('DetailsNewCarComponent', () => {
  let component: DetailsNewCarComponent;
  let fixture: ComponentFixture<DetailsNewCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsNewCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
