import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCarComponent } from './contact-car.component';

describe('ContactCarComponent', () => {
  let component: ContactCarComponent;
  let fixture: ComponentFixture<ContactCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
