import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    { icon: '🎯', title: 'Problem Solver', description: 'I love tackling complex challenges and finding elegant solutions.' },
    { icon: '🚀', title: 'Fast Learner', description: 'Always exploring new technologies and staying up-to-date with trends.' },
    { icon: '🤝', title: 'Team Player', description: 'Great at collaborating with cross-functional teams to deliver results.' },
    { icon: '✨', title: 'Detail Oriented', description: 'I believe the small details make the biggest difference in quality.' },
  ];
}
