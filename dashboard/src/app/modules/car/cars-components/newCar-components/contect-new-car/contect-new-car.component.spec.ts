import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectNewCarComponent } from './contect-new-car.component';

describe('ContectNewCarComponent', () => {
  let component: ContectNewCarComponent;
  let fixture: ComponentFixture<ContectNewCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContectNewCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
