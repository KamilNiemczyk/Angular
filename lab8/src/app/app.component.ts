import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDisplayComponent } from './user-display/user-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab8';
}
