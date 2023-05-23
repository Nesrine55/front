import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetoffersService } from '../services/getoffers.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-companynavbar',
  templateUrl: './companynavbar.component.html',
  styleUrls: ['./companynavbar.component.css']
})
export class CompanynavbarComponent implements OnInit{

  company!: any;

  id: any;
  profileCompanyForm: any;

  constructor(
    private authService: AuthService,
    private userService: UserSettingsServiceService,
    private router: Router, private toastr: ToastrService,
    private formBuilder: FormBuilder,

    ){}
  ngOnInit(): void {

    this.profileCompanyForm = this.formBuilder.group({
      name: ['', Validators.required],
     
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      service1: ['', Validators.required],
      service2: ['', Validators.required],
      service3: ['', Validators.required],
      service4: ['', Validators.required],
      Mobile: ['', Validators.required],
      domain: ['', Validators.required],
      location: ['', Validators.required]

    });


    const data = JSON.parse(localStorage.getItem('data')!);
    this.id = data.userId;

    this.getCompany();
  }

  getCompany(){
    this.userService.getCompanyById(this.id).subscribe(user => {
      console.log(user)
      this.profileCompanyForm.patchValue(user);
      this.company=user;
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
