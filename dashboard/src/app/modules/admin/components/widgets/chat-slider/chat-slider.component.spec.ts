import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSliderComponent } from './chat-slider.component';

describe('ChatSliderComponent', () => {
  let component: ChatSliderComponent;
  let fixture: ComponentFixture<ChatSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
