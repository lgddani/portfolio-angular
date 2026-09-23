import { Routes } from '@angular/router';
import { ComHomePageComponent } from './com-home-page/com-home-page.component';
import { ComProyectoBarberBookingComponent } from './com-proyecto-barber-booking/com-proyecto-barber-booking.component';

export const routes: Routes = [
    { path: '', component: ComHomePageComponent, title: 'Daniel Enriquez - Portfolio' },
    { path: 'proyectos/barber-booking-system', component: ComProyectoBarberBookingComponent, title: 'Barber Booking System - Daniel Enriquez' }
];
