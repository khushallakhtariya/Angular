import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-overview',
  imports: [CommonModule,ChartModule],
  templateUrl: './overview.component.html',
  standalone: true,
})
export class OverviewComponent {
  authors = [
    {
      name: 'John Doe',
      role: 'Product Designer',
      image: 'https://i.pravatar.cc/100?img=1',
      bio: 'Creating perfection, one design at a time.',
    },
    {
      name: 'Alice Smith',
      role: 'Frontend Engineer',
      image: 'https://i.pravatar.cc/100?img=2',
      bio: 'Crafting fast and elegant interfaces.',
    },
    {
      name: 'Robert Brown',
      role: 'Backend Architect',
      image: 'https://i.pravatar.cc/100?img=3',
      bio: 'Making data flow like poetry.',
    },
    {
      name: 'Emily Johnson',
      role: 'UX Specialist',
      image: 'https://i.pravatar.cc/100?img=4',
      bio: 'Turning feedback into frictionless flows.',
    },
    {
      name: 'Chris Lee',
      role: 'Project Manager',
      image: 'https://i.pravatar.cc/100?img=5',
      bio: 'Keeping milestones on track and teams aligned.',
    },
    {
      name: 'Sophia Garcia',
      role: 'QA Engineer',
      image: 'https://i.pravatar.cc/100?img=6',
      bio: 'Breaking things so users never have to.',
    },
  ];

  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Active Users',
        backgroundColor: '#6366F1',
        borderColor: '#6366F1',
        data: [65, 59, 80, 81, 56, 55]
      },
      {
        label: 'New Users',
        backgroundColor: '#10B981',
        borderColor: '#10B981',
        data: [28, 48, 40, 19, 86, 27]
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
