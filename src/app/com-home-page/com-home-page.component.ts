import { Component } from '@angular/core';
import { ComHomeComponent } from '../com-home/com-home.component';
import { ComServicesComponent } from '../com-services/com-services.component';
import { ComProjectsComponent } from '../com-projects/com-projects.component';
import { ComExperienceComponent } from '../com-experience/com-experience.component';
import { ComCertificatesComponent } from '../com-certificates/com-certificates.component';

@Component({
  selector: 'app-com-home-page',
  standalone: true,
  imports: [
    ComHomeComponent,
    ComServicesComponent,
    ComProjectsComponent,
    ComExperienceComponent,
    ComCertificatesComponent
  ],
  templateUrl: './com-home-page.component.html'
})
export class ComHomePageComponent { }
