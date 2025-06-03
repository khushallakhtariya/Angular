import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformaitonComponent } from './user-informaiton.component';

describe('UserInformaitonComponent', () => {
  let component: UserInformaitonComponent;
  let fixture: ComponentFixture<UserInformaitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInformaitonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformaitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
