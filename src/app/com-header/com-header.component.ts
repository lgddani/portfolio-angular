import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-com-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './com-header.component.html',
  styleUrl: './com-header.component.css'
})

export class ComHeaderComponent {
  menuActive: boolean = false;

  toggleMenu(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  redirectToEmail() {
    var email = 'rdanienriquez01@gmail.com';
    var mailtoLink = 'mailto:' + email;
    window.location.href = mailtoLink;
  }
}