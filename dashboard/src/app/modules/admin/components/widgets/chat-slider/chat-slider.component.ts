import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ChatUser {
  name: string;
  avatar?: string;
  messages: string[];
  isOnline?: boolean;
}

@Component({
  selector: 'app-chat-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatSliderComponent implements AfterViewChecked {
  @Input() isOpen = false;

  @Input() chatUser: ChatUser = {
    name: 'Support Agent',
    isOnline: true,
    messages: [
      'Hello! 👋',
      'Welcome to our support chat.',
      'How can I help you today?',
    ],
  };

  @Output() closeSlider = new EventEmitter<void>();

  newMessage = '';

  @ViewChild('messagesContainer') private messagesContainer?: ElementRef<HTMLDivElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  close(): void { 
    this.closeSlider.emit();
  }

  sendMessage(): void {
    const trimmed = this.newMessage.trim();
    if (!trimmed) return;

    this.chatUser.messages.push(trimmed);

    this.newMessage = '';

    this.cdr.markForCheck();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  ngAfterViewChecked(): void {
    if (this.messagesContainer?.nativeElement) {
      const el = this.messagesContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
}
