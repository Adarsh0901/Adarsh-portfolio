import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 70 },
        { name: 'Express', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 65 },
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'Redis', level: 60 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 75 },
      ]
    },
  ];
}
