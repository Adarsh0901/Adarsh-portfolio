import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Adarsh0901', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adarsh-shukla-6537a31b4/', icon: 'linkedin' },
    { name: 'X', url: 'https://x.com/AdarshS25416821', icon: 'X' },
    { name: 'Email', url: 'mailto:adarshshuklaworkspace@gmail.com', icon: 'email' },
  ];
}
