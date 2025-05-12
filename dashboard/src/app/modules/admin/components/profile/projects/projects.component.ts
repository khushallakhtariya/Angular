import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Nebula UI Kit',
      description:
        'A modern UI component library for building clean web interfaces with 50+ customizable components.',
      image:
        'https://images.pexels.com/photos/31213436/pexels-photo-31213436/free-photo-of-minimalist-wall-with-overhanging-greenery.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'Done',
      type: 'UI Library',
      tags: ['Angular', 'SCSS', 'Design System'],
      date: 'Jan 2023',
      demoLink: true,
    },
    {
      title: 'Aurora Task Flow',
      description:
        'An intuitive task management tool for teams with real-time collaboration features and analytics.',
      image:
        'https://images.pexels.com/photos/11497213/pexels-photo-11497213.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'In Progress',
      type: 'Web App',
      tags: ['React', 'Node.js', 'MongoDB'],
      date: 'Mar 2023 - Present',
      demoLink: false,
    },
    {
      title: 'Nova E-commerce',
      description:
        'A scalable e-commerce solution with integrated analytics, payment processing, and inventory management.',
      image:
        'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'E-commerce',
      tags: ['Next.js', 'Stripe', 'Firebase'],
      date: 'Nov 2022',
      demoLink: true,
    },
    {
      title: 'Solar CRM',
      description:
        'Customer relationship management system with lead tracking, email integration, and reporting dashboard.',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'Business Tool',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      date: 'Aug 2022',
      demoLink: true,
    },
    {
      title: 'Vortex Blog Engine',
      description:
        'A fast, SEO-optimized blogging platform with Markdown support, syntax highlighting, and dark mode.',
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      status: 'Pending',
      type: 'CMS',
      tags: ['Svelte', 'Express', 'MongoDB'],
      date: 'Coming Soon',
      demoLink: false,
    },
    {
      title: 'PixelPay',
      description:
        'Secure payment gateway with fraud detection, multi-currency support, and developer-friendly API.',
      image:
        'https://images.pexels.com/photos/31884207/pexels-photo-31884207/free-photo-of-green-sea-turtle-glides-under-sunlit-ocean-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'In Progress',
      type: 'Payment System',
      tags: ['TypeScript', 'NestJS', 'PostgreSQL'],
      date: 'Feb 2023 - Present',
      demoLink: false,
    },
    {
      title: 'SkyTrack Analytics',
      description:
        'Real-time user tracking with heatmaps, session recordings, and custom event tracking for websites.',
      image:
        'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'Analytics',
      tags: ['JavaScript', 'Redis', 'BigQuery'],
      date: 'Dec 2022',
      demoLink: true,
    },
    {
      title: 'Echo Chat',
      description:
        'A real-time chat application with rich media support, end-to-end encryption, and customizable themes.',
      image:
        'https://images.pexels.com/photos/27015351/pexels-photo-27015351/free-photo-of-small-semi-detached-house-by-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'Done',
      type: 'Communication',
      tags: ['React Native', 'WebSockets', 'Firebase'],
      date: 'Sep 2022',
      demoLink: true,
    },
    {
      title: 'Quantum Portfolio',
      description:
        'An elegant portfolio template with animations, project showcase, and contact form for creatives.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'Template',
      tags: ['HTML/CSS', 'GSAP', 'Netlify'],
      date: 'Jul 2022',
      demoLink: true,
    },    {
      title: 'Nebula UI Kit',
      description:
        'A modern UI component library for building clean web interfaces with 50+ customizable components.',
      image:
        'https://images.pexels.com/photos/31213436/pexels-photo-31213436/free-photo-of-minimalist-wall-with-overhanging-greenery.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'Done',
      type: 'UI Library',
      tags: ['Angular', 'SCSS', 'Design System'],
      date: 'Jan 2023',
      demoLink: true,
    },
    {
      title: 'Aurora Task Flow',
      description:
        'An intuitive task management tool for teams with real-time collaboration features and analytics.',
      image:
        'https://images.pexels.com/photos/11497213/pexels-photo-11497213.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'In Progress',
      type: 'Web App',
      tags: ['React', 'Node.js', 'MongoDB'],
      date: 'Mar 2023 - Present',
      demoLink: false,
    },
    {
      title: 'Nova E-commerce',
      description:
        'A scalable e-commerce solution with integrated analytics, payment processing, and inventory management.',
      image:
        'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'E-commerce',
      tags: ['Next.js', 'Stripe', 'Firebase'],
      date: 'Nov 2022',
      demoLink: true,
    },
    {
      title: 'Solar CRM',
      description:
        'Customer relationship management system with lead tracking, email integration, and reporting dashboard.',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'Business Tool',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      date: 'Aug 2022',
      demoLink: true,
    },
    {
      title: 'Vortex Blog Engine',
      description:
        'A fast, SEO-optimized blogging platform with Markdown support, syntax highlighting, and dark mode.',
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      status: 'Pending',
      type: 'CMS',
      tags: ['Svelte', 'Express', 'MongoDB'],
      date: 'Coming Soon',
      demoLink: false,
    },
    {
      title: 'PixelPay',
      description:
        'Secure payment gateway with fraud detection, multi-currency support, and developer-friendly API.',
      image:
        'https://images.pexels.com/photos/31884207/pexels-photo-31884207/free-photo-of-green-sea-turtle-glides-under-sunlit-ocean-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'In Progress',
      type: 'Payment System',
      tags: ['TypeScript', 'NestJS', 'PostgreSQL'],
      date: 'Feb 2023 - Present',
      demoLink: false,
    },
    {
      title: 'SkyTrack Analytics',
      description:
        'Real-time user tracking with heatmaps, session recordings, and custom event tracking for websites.',
      image:
        'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'Analytics',
      tags: ['JavaScript', 'Redis', 'BigQuery'],
      date: 'Dec 2022',
      demoLink: true,
    },
    {
      title: 'Echo Chat',
      description:
        'A real-time chat application with rich media support, end-to-end encryption, and customizable themes.',
      image:
        'https://images.pexels.com/photos/27015351/pexels-photo-27015351/free-photo-of-small-semi-detached-house-by-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'Done',
      type: 'Communication',
      tags: ['React Native', 'WebSockets', 'Firebase'],
      date: 'Sep 2022',
      demoLink: true,
    },
    {
      title: 'Quantum Portfolio',
      description:
        'An elegant portfolio template with animations, project showcase, and contact form for creatives.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      status: 'Done',
      type: 'Template',
      tags: ['HTML/CSS', 'GSAP', 'Netlify'],
      date: 'Jul 2022',
      demoLink: true,
    },
  ];
  
  visibleProjects = 3; 
  isLoading = false;   
  loadMoreProjects() {
    this.isLoading = true; 
    setTimeout(() => {
      
      if (this.visibleProjects < this.projects.length) {
        this.visibleProjects += 3; 
      }
      this.isLoading = false; 
    }, 2000); 
  }
}
