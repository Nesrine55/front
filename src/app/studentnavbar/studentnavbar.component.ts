import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-studentnavbar',
  templateUrl: './studentnavbar.component.html',
  styleUrls: ['./studentnavbar.component.css']
})
export class StudentnavbarComponent {
  constructor(private authService: AuthService,private router: Router, private toastr: ToastrService){}
  logout(){
    this.authService.isAuthenticated = false;
    this.authService.role = "";
    localStorage.removeItem("data")
    localStorage.removeItem("token")
    this.router.navigateByUrl("/")

  }
}
