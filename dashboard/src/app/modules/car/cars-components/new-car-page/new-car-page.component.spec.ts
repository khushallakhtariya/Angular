import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarPageComponent } from './new-car-page.component';

describe('NewCarPageComponent', () => {
  let component: NewCarPageComponent;
  let fixture: ComponentFixture<NewCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
