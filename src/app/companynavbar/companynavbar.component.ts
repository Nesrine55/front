import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-companynavbar',
  templateUrl: './companynavbar.component.html',
  styleUrls: ['./companynavbar.component.css']
})
export class CompanynavbarComponent {
  constructor(private authService: AuthService,private router: Router, private toastr: ToastrService){}
  logout(){
    this.authService.isAuthenticated = false;
    this.authService.role = "";
    localStorage.removeItem("data")
    localStorage.removeItem("token")
    this.router.navigateByUrl("/")

  }
}
