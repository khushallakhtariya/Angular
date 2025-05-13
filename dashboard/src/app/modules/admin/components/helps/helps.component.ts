import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-helps',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.css'],
})
export class HelpsComponent {
  faqs = [
    {
      question: 'How can I reset my password?',
      answer:
        'Click on "Forgot password" on the login page and follow the instructions.',
      open: false,
    },
    {
      question: 'Where can I view my messages?',
      answer: 'Navigate to the "Messages" section from the main menu.',
      open: false,
    },
    {
      question: 'How do I contact support?',
      answer:
        'You can reach us via the "Contact Us" form under the Help section.',
      open: false,
    },
    {
      question: 'Can I change my email address?',
      answer:
        'Yes, go to Account Settings > Personal Information to update your email.',
      open: false,
    },
    {
      question: 'How do I delete my account?',
      answer: 'Please contact support to request account deletion.',
      open: false,
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, our app is available on both iOS and Android platforms.',
      open: false,
    },
    {
      question: 'How do I enable two-factor authentication?',
      answer: 'Go to Security Settings and follow the steps to enable 2FA.',
      open: false,
    },
    {
      question: 'What should I do if I see suspicious activity?',
      answer:
        'Immediately change your password and report the activity to support.',
      open: false,
    },
    {
      question: 'Can I customize my profile?',
      answer:
        'Yes, you can edit your profile photo, bio, and more from your account settings.',
      open: false,
    },
    {
      question: 'How do I unsubscribe from emails?',
      answer:
        'Click the "Unsubscribe" link at the bottom of any email from us.',
      open: false,
    },
    {
      question: 'Why am I not receiving notifications?',
      answer:
        'Check your notification settings and ensure your browser/app permissions are enabled.',
      open: false,
    },
    {
      question: 'How can I upgrade my subscription plan?',
      answer:
        'Visit the Billing section in your account settings to change your plan.',
      open: false,
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'Refunds are handled on a case-by-case basis. Please contact support.',
      open: false,
    },
    {
      question: 'Can I use the platform offline?',
      answer: 'Some features may be available offline via our mobile app.',
      open: false,
    },
    {
      question: 'How do I report a bug?',
      answer:
        'Use the "Report a Problem" option in the Help section or contact support.',
      open: false,
    },
  ];

  toggleFAQ(index: number): void {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    }));
  }
  
}
