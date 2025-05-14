import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDeshComponent } from './nav-desh.component';

describe('NavDeshComponent', () => {
  let component: NavDeshComponent;
  let fixture: ComponentFixture<NavDeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDeshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
