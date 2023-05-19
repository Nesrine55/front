import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = route.data['role'];
    console.log(this.authService.getUserRole() === role)
    console.log(this.authService.getisAuthenticated())
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/signin']); // Navigate to the login page 
    return false;
  }
}
