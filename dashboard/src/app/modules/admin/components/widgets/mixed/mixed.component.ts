import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-mixed',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.css']
})
export class MixedComponent implements OnInit {
  salesSummary = {
    balance: 37562.00,
    salesRegions: 100,
    salesValue: 2.5, // in billions
    revenue: 1.7, // in billions
    growthRate: 80,
    growthValue: 8.8, // in millions
    disputeRefunds: 3090,
    disputeValue: 270 // in millions
  };

  salesStats = [
    { title: 'Weekly Sales', value: '1,240', trend: 'up', change: '12%', icon: '💰' },
    { title: 'New Projects', value: '56', trend: 'up', change: '5%', icon: '🆕' },
    { title: 'Item Orders', value: '3,890', trend: 'down', change: '2%', icon: '📦' },
    { title: 'Bug Reports', value: '124', trend: 'down', change: '8%', icon: '🐛' }
  ];

  // Pie Chart
  data: any;
  options: any;

  // Line Chart
  lineData: any;
  lineOptions: any;

  // Radar Chart
  radarData: any;
  radarOptions: any;

  // Polar Area Chart
  polarData: any;
  polarOptions: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initChart();
  }

  getTrendColor(trend: string) {
    return trend === 'up' ? 'text-emerald-500' : 'text-rose-500';
  }

  getTrendIcon(trend: string) {
    return trend === 'up' ? '↑' : '↓';
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color').trim() || '#334155';

      // Pie Chart Data & Options
      this.data = {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#6366f1', '#10b981', '#f59e0b'],
            hoverBackgroundColor: ['#4f46e5', '#059669', '#d97706']
          }
        ]
      };
      this.options = {
        plugins: {
          legend: {
            labels: { color: textColor }
          }
        }
      };

      // Line Chart Data & Options
      this.lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Revenue',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4f46e5',
            tension: 0.4
          }
        ]
      };
      this.lineOptions = {
        plugins: {
          legend: {
            labels: { color: textColor }
          }
        },
        scales: {
          x: { ticks: { color: textColor } },
          y: { ticks: { color: textColor } }
        }
      };

      // Radar Chart Data & Options
      this.radarData = {
        labels: ['Marketing', 'Sales', 'Development', 'Support', 'Finance', 'Admin'],
        datasets: [
          {
            label: 'Allocated Budget',
            data: [65, 59, 90, 81, 56, 55],
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderColor: '#6366f1',
            pointBackgroundColor: '#6366f1'
          },
          {
            label: 'Actual Spending',
            data: [28, 48, 40, 19, 96, 27],
            fill: true,
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10b981',
            pointBackgroundColor: '#10b981'
          }
        ]
      };
      this.radarOptions = {
        plugins: {
          legend: {
            labels: { color: textColor }
          }
        },
        scales: {
          r: {
            pointLabels: { color: textColor },
            grid: { color: '#cbd5e1' },
            angleLines: { color: '#cbd5e1' }
          }
        }
      };

      // Polar Area Chart Data & Options
      this.polarData = {
        labels: ['Sales', 'Marketing', 'Development', 'Customer Support', 'HR'],
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#0ea5e9']
          }
        ]
      };
      this.polarOptions = {
        plugins: {
          legend: {
            labels: { color: textColor }
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}
