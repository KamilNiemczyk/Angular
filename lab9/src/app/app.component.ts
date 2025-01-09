import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObsServerTestComponent } from "./obs-server-test/obs-server-test.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObsServerTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab9';
}
