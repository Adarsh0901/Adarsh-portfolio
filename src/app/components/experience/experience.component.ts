import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Application Engineer',
      company: 'Remiges Technologies PVT LTD',
      period: '2022 — Present',
      description: 'Leading frontend development for the main product, working with Angular and TypeScript.',
      achievements: [
        'Led migration from AngularJS to Angular 17, improving performance by 40%',
        'Implemented design system used across 5 product teams',
        'Mentored 3 junior developers',
      ],
      current: true,
    },
    {
      role: 'Full Stack Developer',
      company: 'INSNAPSYS',
      period: '2022 — 2022',
      description: 'Built and maintained web applications for enterprise clients.',
      achievements: [
        'Developed RESTful APIs serving 100K+ daily requests',
        'Reduced page load time by 60% through optimization',
        'Integrated third-party payment and analytics services',
      ],
      current: false,
    }
  ];
}
