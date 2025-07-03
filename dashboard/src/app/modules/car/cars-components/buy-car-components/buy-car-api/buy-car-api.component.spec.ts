import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarApiComponent } from './buy-car-api.component';

describe('BuyCarApiComponent', () => {
  let component: BuyCarApiComponent;
  let fixture: ComponentFixture<BuyCarApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCarApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyCarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
