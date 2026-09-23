import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-com-proyecto-barber-booking',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './com-proyecto-barber-booking.component.html',
  styleUrl: './com-proyecto-barber-booking.component.css'
})
export class ComProyectoBarberBookingComponent {
  repoUrl = 'https://github.com/lgddani/barber-booking-system';

  openImage(path: string) {
    window.open(path, '_blank');
  }
}
