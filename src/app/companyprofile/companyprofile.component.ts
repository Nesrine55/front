import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';
import { user } from '../models/user';
import { ToastrService } from 'ngx-toastr';
import { GetoffersService } from '../services/getoffers.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit{
  profileCompanyForm!: FormGroup;
  id: any;
  company!: any;

  offers!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserSettingsServiceService,
    private toastr: ToastrService,
    private getOffer:GetoffersService,


    

  ) { }

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
      location: ['', Validators.required],
     


    });

   

    const data = JSON.parse(localStorage.getItem('data')!);
    this.id = data.userId;

    this.getCompany();
  

    
}

getCompany(){
  this.userService.getCompanyById(this.id).subscribe(user => {
    console.log(user)
    this.profileCompanyForm.patchValue(user);

    this.getOffer.getOfferscompany(this.id).subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );

    this.company=user;
  },
    err => console.log(err));
}


onSubmit() {
  const updateCompany: user = this.profileCompanyForm.value;
  this.userService.updateCompany(updateCompany, this.id).subscribe((res) => {
    console.log(res);
    this.toastr.success('your informations has been updated successfully');

    this.getCompany()
   
  }, (err) => {
    console.log(err)
  });

}
}
