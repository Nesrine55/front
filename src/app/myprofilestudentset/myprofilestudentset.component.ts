import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';
import { user } from '../models/user';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-myprofilestudentset',
  templateUrl: './myprofilestudentset.component.html',
  styleUrls: ['./myprofilestudentset.component.css']
})



export class MyprofilestudentsetComponent implements OnInit {
  student!: any;
  profileForm!: FormGroup;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserSettingsServiceService,
    private toastr: ToastrService
  ) { }

  

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

  onSubmit() {


    const updatedUser: user = this.profileForm.value;
    this.userService.updateUser(updatedUser, this.id).subscribe((res) => {
      console.log(res);
      this.toastr.success('your informations has been updated successfully');

      this.getUser();
    }, 
    (err) => {
      console.log(err);
    }
    );
  }

}

