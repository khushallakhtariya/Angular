import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRiewComponent } from './user-riew.component';

describe('UserRiewComponent', () => {
  let component: UserRiewComponent;
  let fixture: ComponentFixture<UserRiewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRiewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
