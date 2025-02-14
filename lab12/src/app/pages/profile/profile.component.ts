import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private authService: AuthService) { }

  httpReq() : void {
    console.log('Profile Request');
    this.authService.getProfile()
  }
}
