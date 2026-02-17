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
      role: 'Senior Frontend Developer',
      company: 'Company Name — TODO',
      period: '2023 — Present',
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
      company: 'Company Name — TODO',
      period: '2022 — 2023',
      description: 'Built and maintained web applications for enterprise clients.',
      achievements: [
        'Developed RESTful APIs serving 100K+ daily requests',
        'Reduced page load time by 60% through optimization',
        'Integrated third-party payment and analytics services',
      ],
      current: false,
    },
    {
      role: 'Junior Developer',
      company: 'Company Name — TODO',
      period: '2021 — 2022',
      description: 'Started my professional journey building web interfaces and learning best practices.',
      achievements: [
        'Built responsive UIs for 10+ client projects',
        'Introduced automated testing, achieving 80% code coverage',
        'Contributed to internal component library',
      ],
      current: false,
    },
  ];
}
