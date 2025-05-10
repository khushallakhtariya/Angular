import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

ChartJS.register(
  ArcElement, Tooltip, Legend, BarElement, 
  CategoryScale, LinearScale, PointElement, 
  LineElement, Title
);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Doughnut Chart (existing)
  doughnutData = {
    labels: ['Users', 'Sales', 'Reports'],
    datasets: [
      {
        data: [320, 380, 80],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
        hoverBackgroundColor: ['#60a5fa', '#34d399', '#fbbf24'],
        borderWidth: 0,
        borderRadius: 5
      }
    ]
  };

  doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#64748b',
          font: {
            size: 14,
            family: 'Inter, sans-serif'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        },
        onHover: (event: any, legendItem: any) => {
          event.native.target.style.cursor = 'pointer';
        },
        onClick: () => {}
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleFont: {
          size: 16,
          weight: 'bold'
        },
        bodyFont: {
          size: 14
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    hover: {
      mode: 'nearest',
      intersect: true
    }
  };

  // Pie Chart
  pieData = {
    labels: ['New Users', 'Returning Users', 'Inactive Users'],
    datasets: [
      {
        data: [120, 180, 20],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
        hoverBackgroundColor: ['#60a5fa', '#34d399', '#fbbf24'],
        borderWidth: 0
      }
    ]
  };

  pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#64748b',
          font: {
            size: 14,
            family: 'Inter, sans-serif'
          },
          padding: 20,
          usePointStyle: true
        }
      },
      tooltip: {
        backgroundColor: '#1e293b',
        bodyFont: {
          size: 14
        },
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };

  // Vertical Bar Chart
  barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 8500, 9200, 7800, 9900, 11500],
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6',
        borderWidth: 1,
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
        grid: {
          drawBorder: false
        },
        ticks: {
          callback: (value: any) => '$' + value
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return '$' + context.raw;
          }
        }
      }
    }
  };

  // Line Chart
  lineData = {
    labels: Array.from({length: 90}, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (89 - i));
      return date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
    }),
    datasets: [
      {
        label: 'Active Users',
        data: Array.from({length: 90}, () => Math.floor(Math.random() * 200) + 100),
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          drawBorder: false
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 10
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // Stacked Bar Chart
  stackedBarData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Electronics',
        data: [12000, 15000, 18000, 21000],
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6',
        borderWidth: 1
      },
      {
        label: 'Clothing',
        data: [8000, 12000, 10000, 15000],
        backgroundColor: '#10b981',
        borderColor: '#10b981',
        borderWidth: 1
      },
      {
        label: 'Home Goods',
        data: [5000, 7000, 9000, 11000],
        backgroundColor: '#f59e0b',
        borderColor: '#f59e0b',
        borderWidth: 1
      }
    ]
  };

  stackedBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        grid: {
          drawBorder: false
        },
        ticks: {
          callback: (value: any) => '$' + value
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return context.dataset.label + ': $' + context.raw;
          }
        }
      }
    }
  };

  // Multi-Axis Line Chart
  multiAxisData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Users',
        data: [120, 190, 170, 220, 250, 300],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        yAxisID: 'y',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Revenue ($)',
        data: [4500, 6200, 5800, 7500, 8200, 9500],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        yAxisID: 'y1',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Conversion (%)',
        data: [2.5, 3.1, 2.8, 3.5, 3.8, 4.2],
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        yAxisID: 'y2',
        tension: 0.4,
        fill: true
      }
    ]
  };

  multiAxisOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Users'
        },
        grid: {
          drawOnChartArea: false
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Revenue ($)'
        },
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: (value: any) => '$' + value
        }
      },
      y2: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Conversion (%)'
        },
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: (value: any) => value + '%'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || '';
            if (label.includes('Revenue')) {
              label += ': $' + context.raw;
            } else if (label.includes('Conversion')) {
              label += ': ' + context.raw + '%';
            } else {
              label += ': ' + context.raw;
            }
            return label;
          }
        }
      }
    }
  };
}