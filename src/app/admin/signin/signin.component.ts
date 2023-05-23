import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthAdminService } from '../services/auth-admin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  adminloginForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService,private adminAuthService: AuthAdminService) {}
  
  ngOnInit(): void {
    this.adminloginForm = this.fb.group({
     
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      
    });

  }
  loginAdmin(): void{
    // Get the form values
  const email = this.adminloginForm.get('email')?.value;
  const password = this.adminloginForm.get('password')?.value;
  
  // Perform the login logic
  // Call your authentication service to handle the login process
  this.adminAuthService.loginadmin(email,password)
    .subscribe(
      (response) => {
        // Login successful
        // You can navigate to another page or perform any other actions
        this.toastr.success('you are logged in');

        this.router.navigate(['/mydashboard']);
      },
      (error) => {
        // Login failed
        // Handle the error, display an error message, etc.
        this.toastr.error('Login failed. Please check your credentials.', 'Error');
      }
    );
  }
}
