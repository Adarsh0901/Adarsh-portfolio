import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment integration. Built with Angular and Node.js.',
      image: '',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop, and team features.',
      image: '',
      tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather app with location-based forecasts, interactive maps, and data visualization.',
      image: '',
      tags: ['Angular', 'OpenWeather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Portfolio Generator',
      description: 'A CLI tool that generates stunning portfolio websites from a simple JSON configuration file.',
      image: '',
      tags: ['Node.js', 'TypeScript', 'CLI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat with rooms, direct messages, file sharing, and end-to-end encryption.',
      image: '',
      tags: ['Angular', 'Socket.io', 'Express', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Blog CMS',
      description: 'A headless CMS with markdown support, SEO optimization, and a clean admin dashboard.',
      image: '',
      tags: ['Next.js', 'PostgreSQL', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];
}
