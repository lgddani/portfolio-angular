import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Project, projectsList } from './projects.mock';

@Component({
  selector: 'app-com-projects',
  standalone: true,
  imports: [],
  templateUrl: './com-projects.component.html',
  styleUrl: './com-projects.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ComProjectsComponent {
  projectsList = projectsList;

  constructor(private router: Router) { }

  goToProject(project: Project) {
    if (project.internalRoute) {
      this.router.navigateByUrl(project.internalRoute);
    } else {
      window.open(project.link, '_blank');
    }
  }
}
