import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm!: FormGroup;
    Role!: string;
    Role1!: string

    errorMessage = '';
    /*constructor (private http:HttpClient){
        this.http.get('http://localhost:5000/AllStudents').subscribe(data=>console.log(data))
    }*/

    constructor(private authService: AuthService, private router:Router){}




 

    public ngOnInit(): void{

        this.signupForm =   
        new FormGroup({
            name: new FormControl("", [Validators.required, Validators.minLength(2)]),
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [
                Validators.required,
                Validators.minLength(7)]),
            confirmpassword: new FormControl("", [
                    Validators.required,
                    Validators.minLength(7)]),
                    
        });
        //this.signupForm = this.createFormGroupCampagny();
        

       const signUpButton: HTMLElement = document.getElementById('signUp')!;
        const signInButton: HTMLElement = document.getElementById('signIn')!;
        const container: HTMLElement = document.getElementById('container')!;
        
        signUpButton.addEventListener('click', () => {
          container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
          container.classList.remove("right-panel-active");
        });
        $(document).ready(function () {
    
          'use strict';
      
          var usernameError = true,
              emailError    = true,
              passwordError = true,
              passConfirm   = true;
    
    
      
      
          // Form validation
          $('input').blur(function (this:any) {
      
              // User Name
              if ($(this).hasClass('name')) {
                  if ($(this).val().length === 0) {
                      $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
                      usernameError = true;
                  } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                      $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
                      usernameError = true;
                  } else {
                      $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                      usernameError = false;
                  }
              }
              // Email
              if ($(this).hasClass('email')) {
                  if ($(this).val().length == '') {
                      $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                      emailError = true;
                  } else {
                      $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                      emailError = false;
                  }
              }
      
              // PassWord
              if ($(this).hasClass('pass')) {
                  if ($(this).val().length < 8) {
                      $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
                      passwordError = true;
                  } else {
                      $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                      passwordError = false;
                  }
              }
      
              // PassWord confirmation
              if ($('.pass').val() !== $('.passConfirm').val()) {
                  $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
                  passConfirm = false;
              } else {
                  $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                  passConfirm = false;
              }
      
      
      
      });
      });
    


}




  
/*createFormGroupCampagny():FormGroup{
    return new FormGroup({
        name: new FormControl("", [Validators.required, Validators.minLength(2)]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(7)]),
        confirmpassword: new FormControl("", [
                Validators.required,
                Validators.minLength(7)]),


    });
}*/



signupUser():void{
    console.log(this.signupForm.value);

    
    this.authService
    .signupUser(this.signupForm.value)
    .subscribe(
        response=>{
            console.log(response);
           // const email = localStorage.setItem('email',response.email)
            //const role = localStorage.setItem('role',response.role)
            this.router.navigate(["/mailvalidate"]);
            
        },error=>{
            console.log(error)
            this.errorMessage = 'There was an error during sign up';

        }
    );

}
signupCompany():void{
       
    this.authService
    .signupCompany(this.signupForm.value)
    .subscribe(response=>{
        const email = localStorage.setItem('email',response.email)
        const role = localStorage.setItem('role',response.role)
        this.router.navigate(["/mailvalidate"]);
    },error=>{
        console.log(error)
        this.errorMessage = 'There was an error during sign up';

    }); 
}

}
