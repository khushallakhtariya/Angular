import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHComponent } from './error-h.component';

describe('ErrorHComponent', () => {
  let component: ErrorHComponent;
  let fixture: ComponentFixture<ErrorHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
