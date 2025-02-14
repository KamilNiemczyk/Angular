import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const logGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.isLoggedIn()){
    console.log('Access Granted');
    return true;
  }else{
    console.log('Access Denied');
    return router.createUrlTree(['/home']);
  }
};
