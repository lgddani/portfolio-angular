import { Component, ViewEncapsulation } from '@angular/core';
import { certificatesList, Certificate } from './certificates.mock';

@Component({
  selector: 'app-com-certificates',
  standalone: true,
  imports: [],
  templateUrl: './com-certificates.component.html',
  styleUrl: './com-certificates.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ComCertificatesComponent {

  certificateList = certificatesList;

  openCertificate(certificate: Certificate) {
    window.open(certificate.url as string, '_blank');
  }
}