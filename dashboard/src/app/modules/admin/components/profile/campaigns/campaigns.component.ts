import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
})
export class CampaignsComponent {
  campaigns = [
    {
      platform: 'Twitch Posts',
      value: '$500.00',
      change: '-40.5%',
      label: 'more impressions',
      secondary: '0.5%',
      secondaryLabel: 'MRR',
    },
    {
      platform: 'Twitter Followers',
      value: '807k',
      change: '+17.62%',
      label: 'Followers growth',
      secondary: '5%',
      secondaryLabel: 'New trials',
    },
    {
      platform: 'Spotify Listeners',
      value: '1,073',
      change: '-10.45%',
      label: 'Less comments than usual',
      secondary: '40%',
      secondaryLabel: 'Impressions',
    },
    {
      platform: 'Pinterest Posts',
      value: '97',
      change: '+26.1%',
      label: 'More posts',
      secondary: '10%',
      secondaryLabel: 'Spend',
    },
    {
      platform: 'Github Contributes',
      value: '4,109',
      change: '-32.8%',
      label: 'Less contributions',
      secondary: '40%',
      secondaryLabel: 'Dispute',
    },
    {
      platform: 'Youtube Subscribers',
      value: '354',
      change: '+29.45%',
      label: 'Subscribers growth',
      secondary: '40%',
      secondaryLabel: 'Subscribers',
    },
    {
      platform: 'Telegram Posts',
      value: '566',
      change: '+11.4%',
      label: 'more clicks',
      secondary: '40%',
      secondaryLabel: 'Profit',
    },
    {
      platform: 'Reddit Awards',
      value: '2.1M',
      change: '+46.7%',
      label: 'more adds',
      secondary: '0%',
      secondaryLabel: 'Retention',
    },
  ];
}
