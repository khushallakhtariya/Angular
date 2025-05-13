import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtChatComponent } from './pvt-chat.component';

describe('PvtChatComponent', () => {
  let component: PvtChatComponent;
  let fixture: ComponentFixture<PvtChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvtChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvtChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
