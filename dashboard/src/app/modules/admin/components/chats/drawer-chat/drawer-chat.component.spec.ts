import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerChatComponent } from './drawer-chat.component';

describe('DrawerChatComponent', () => {
  let component: DrawerChatComponent;
  let fixture: ComponentFixture<DrawerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
