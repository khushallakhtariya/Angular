import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';  
import { ChartModule } from 'primeng/chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

ChartJS.register(
  ArcElement, Tooltip, Legend, BarElement, 
  CategoryScale, LinearScale, PointElement, 
  LineElement, Title
);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  doughnutData = {
    labels: ['Marketing', 'Development', 'Customer Support'],
    datasets: [
      {
        data: [450, 300, 250],
        backgroundColor: ['#6366f1', '#10b981', '#f97316'],
        hoverBackgroundColor: ['#818cf8', '#34d399', '#fb923c'],
        borderWidth: 0,
        borderRadius: 5
      }
    ]
  };

  doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#475569',
          font: { size: 14, family: 'Inter, sans-serif' },
          usePointStyle: true
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };

  pieData = {
    labels: ['Free Users', 'Pro Users', 'Enterprise'],
    datasets: [
      {
        data: [500, 300, 100],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
        hoverBackgroundColor: ['#60a5fa', '#34d399', '#fbbf24'],
        borderWidth: 0
      }
    ]
  };

  pieOptions = this.doughnutOptions;

  barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [12000, 15000, 17000, 20000],
        backgroundColor: '#3b82f6',
        borderRadius: 6
      }
    ]
  };

  barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `$${value}`
        },
        grid: { drawBorder: false }
      },
      x: {
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw}`
        }
      }
    }
  };

  lineData = {
    labels: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }),
    datasets: [
      {
        label: 'Daily Visitors',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 800) + 200),
        borderColor: '#10b981',
        tension: 0.4,
        fill: false,
        pointRadius: 0
      }
    ]
  };

  lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, grid: { drawBorder: false } },
      x: {
        grid: { display: false },
        ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 7 }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  stackedBarData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Q1',
        data: [5000, 7000, 4000],
        backgroundColor: '#3b82f6'
      },
      {
        label: 'Q2',
        data: [6000, 8000, 4500],
        backgroundColor: '#10b981'
      },
      {
        label: 'Q3',
        data: [7000, 9000, 5000],
        backgroundColor: '#f59e0b'
      }
    ]
  };

  stackedBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: { display: false }
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value: any) => `$${value}`
        },
        grid: { drawBorder: false }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: $${context.raw}`
        }
      }
    }
  };

  multiAxisData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Signups',
        data: [150, 200, 180, 230, 250, 300],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        yAxisID: 'y',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Revenue ($)',
        data: [5000, 7000, 6000, 8000, 9000, 10000],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        yAxisID: 'y1',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Churn Rate (%)',
        data: [3.0, 2.8, 2.9, 2.5, 2.2, 2.0],
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        yAxisID: 'y2',
        fill: true,
        tension: 0.4
      }
    ]
  };

  multiAxisOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Signups'
        },
        grid: {
          drawOnChartArea: false
        }
      },
      y1: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Revenue ($)'
        },
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: (value: any) => `$${value}`
        }
      },
      y2: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Churn Rate (%)'
        },
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: (value: any) => `${value}%`
        }
      },
      x: {
        grid: { display: false }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || '';
            const raw = context.raw;
            if (label.includes('Revenue')) return `${label}: $${raw}`;
            if (label.includes('Churn')) return `${label}: ${raw}%`;
            return `${label}: ${raw}`;
          }
        }
      }
    }
  };
}
