import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComHeaderComponent } from "./com-header/com-header.component";
import { ComFooterComponent } from './com-footer/com-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ComHeaderComponent,
    ComFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Daniel Enriquez - Portfolio';
}
