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
  
    if (this.authService.getisAuthenticated() && this.authService.getUserRole() === role) {
      return true;
    } 
    else {
     // alert("you are not logged in or don't have access to this page");
      this.router.navigate(['/signin']); // Navigate to the login page 
      // i enter a valid email and password but the server return an error
      return true;
    }
  }
}
