import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { logGuardGuard } from './guards/log-guard.guard';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [logGuardGuard]
    },
    {
        path: 'home',
        component: HomeComponent
    }

];
