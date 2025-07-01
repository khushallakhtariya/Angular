import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCarComponent } from './share-car.component';

describe('ShareCarComponent', () => {
  let component: ShareCarComponent;
  let fixture: ComponentFixture<ShareCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
