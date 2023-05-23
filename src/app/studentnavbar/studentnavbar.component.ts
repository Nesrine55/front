import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserSettingsServiceService } from '../services/user-settings-service.service';

@Component({
  selector: 'app-studentnavbar',
  templateUrl: './studentnavbar.component.html',
  styleUrls: ['./studentnavbar.component.css']
})
export class StudentnavbarComponent implements OnInit{
  student!: any;
  profileForm!: FormGroup;
  id: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UserSettingsServiceService,

    
    
    ){}


    ngOnInit(): void {
      this.profileForm = this.formBuilder.group({
        name: ['', Validators.required],
        firstname: ['', Validators.required],
        LastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        bio: ['', [Validators.required]],
        studyEstablishment: ['', Validators.required],
        studyfield: ['', Validators.required],
        file: ['', Validators.required],
        streetAdress: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        Postal: ['', Validators.required],
        Fb: ['', Validators.required],
        Number: ['', Validators.required],
        LinkedIn: ['', Validators.required],
        WhatsApp: ['', Validators.required],
        GitHub: ['', Validators.required]
  
      });
      
  
  
      const data = JSON.parse(localStorage.getItem('data')!);
      this.id = data.userId;
  
      this.getUser()
    }
    getUser() {
      this.userService.getUserById(this.id).subscribe(user => {
        console.log(user)
        this.profileForm.patchValue(user);
        this.student=user;
      },
        err => console.log(err));
    }
  






  logout(){
    this.authService.isAuthenticated = false;
    this.authService.role = "";
    localStorage.removeItem("data")
    localStorage.removeItem("token")
    this.router.navigateByUrl("/")

  }
}
