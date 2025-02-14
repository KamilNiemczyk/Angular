import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) { }
  public log: boolean = false;
  public login(): void {
    this.authService.login();
    this.log = this.authService.isLoggedIn();
  }
  public logout(): void {
    this.authService.logout();
    this.log = this.authService.isLoggedIn();
  }
  public goToProfile(): void {
    this.router.navigate(['/profile']);
  }
  public goToHome(): void {
    this.router.navigate(['/home']);
  }
}
