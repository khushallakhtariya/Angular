import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatSliderComponent } from "../chat-slider/chat-slider.component";

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  imports: [CommonModule, FormsModule, ChatSliderComponent],
  styleUrls: ['./feeds.component.css'],
  standalone: true
})
export class FeedsComponent {
  feeds = [
    {
      name: 'Nick Logan',
      initials: 'NL',
      color: 'blue',
      description: 'PHP, SQLite, Artisan CLI • 2 hours ago',
      content: 'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors...',
      likeCount: 7,
      liked: false,
    },
    {
      name: 'Carles Nilson',
      initials: 'CN',
      color: 'purple',
      description: 'Yesterday at 5:06 PM',
      content: 'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors...',
      likeCount: 3,
      liked: false,
    },
    {
      name: 'Alice Danchik',
      initials: 'AD',
      color: 'pink',
      description: '1 day ago',
      content: 'Long before you sit down to put digital pen to paper you need to make sure...',
      likeCount: 5,
      liked: false,
    },
    {
      name: 'Harris Bold',
      initials: 'HB',
      color: 'red',
      description: '2 days ago',
      content: 'Outlines keep you honest. They stop you from indulging in poorly...',
      likeCount: 2,
      liked: false,
    },
    {
      name: 'Nikita Rodriguez',
      initials: 'HB',
      color: 'yellow',
      description: '2 days ago',
      content: 'Outlines keep you honest. They stop you from indulging in poorly...',
      likeCount: 8,
      liked: false,
    },   {
      name: 'John Doe',
      initials: 'HB',
      color: 'green',
      description: '2 days ago',
      content: 'Outlines keep you honest. They stop you from indulging in poorly...',
      likeCount: 15,
      liked: false,
    }
  ];
isChatOpen: any;
selectedFeed: any;
selectedUser: any = null;

  toggleLike(index: number): void {
    const feed = this.feeds[index];
    feed.liked = !feed.liked;
    feed.likeCount += feed.liked ? 1 : -1;
  }
  
  openChat(user: any) {
    this.selectedUser = user;
  }
  
}
