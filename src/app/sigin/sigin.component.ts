import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';





declare var $: any;

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  loginForm!: FormGroup
  resetForm!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }
  /*user1 = { email: '', password: '' };
  user2 = { email: '', password: '' };*/
  selectedUserType = 'user1';


  previousButton: any;

  changeColor(event: any) {
    if (this.previousButton) {
      this.previousButton.classList.remove('selected');
    }
    event.target.classList.add('selected');
    this.previousButton = event.target;
  }


  public ngOnInit(): void {



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

      var emailError = true,
        passwordError = true,
        passConfirm = true;


      // Form validation
      $('input').blur(function (this: any) {

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



    this.resetForm = this.fb.group({
      type: ['student', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],

    });


    this.loginForm = this.fb.group({
      user1: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }),
      user2: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })
    });

  }



  private isValidEmail(email: string): boolean {
    // email validation logic
    // return true if email is valid, false otherwise

    // simple email validation that checks for a valid format
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  private isValidPassword(password: string): boolean {
    // password validation logic
    // return true if password is valid, false otherwise

    // simple password validation that checks for a minimum length of 6 characters
    return password.length >= 6;
  }



  loginStudentt(): void {
    console.log(this.loginForm.get('user1')?.value, this.loginForm.get('user2')?.value);
    if (this.selectedUserType === 'user1') {
      // email validation logic
      if (!this.isValidEmail(this.loginForm.get('user1.email')?.value)) {
      
       this.toastr.error('Invalid email', 'Error', { timeOut: 2000 });

        return;
      }

      // password validation logic
      if (!this.isValidPassword(this.loginForm.get('user1.password')?.value)) {
        this.toastr.error('Invalid password', 'Error', { timeOut: 2000 });
        return;
      }

      // login logic
      this.authService.loginStudent(this.loginForm.get('user1.email')?.value, this.loginForm.get('user1.password')?.value).subscribe(
        response => {
          localStorage.setItem('data', JSON.stringify(response.data));
          localStorage.setItem('token', response.token);
          localStorage.setItem('role','student');
          this.authService.role = 'student';
          this.authService.isAuthenticated = true;
          this.router.navigate(['/student']);
        },
        error => {
          // login error handling
          console.log(error)
          //this.toastr.error(error.error.message, "Error", { timeOut: 2000 })

          this.toastr.error('Login failed', 'Error', { timeOut: 2000 });
        }
      );
    } else {
      // email validation logic
      if (!this.isValidEmail(this.loginForm.get('user2.email')?.value)) {
        this.toastr.error('Invalid email', 'Error', { timeOut: 2000 });
        return;
      }

      // password validation logic
      if (!this.isValidPassword(this.loginForm.get('user2.password')?.value)) {
        this.toastr.error('Invalid password', 'Error', { timeOut: 2000 });
        return;
      }
      console.log(this.loginForm.get('user2.email')?.value);
      console.log(this.loginForm.get('user2.password')?.value);
      // login logic
      this.authService.loginCopmany(this.loginForm.get('user2.email')?.value, this.loginForm.get('user2.password')?.value).subscribe(
        response => {
          localStorage.setItem('data', JSON.stringify(response.data));
          localStorage.setItem('token', response.token);
          localStorage.setItem('role','company');
          this.authService.role = 'company';
          this.authService.isAuthenticated = true;
          this.router.navigate(['/company']);
        },
        error => {
          // login error handling
          console.log(error)
          //this.toastr.error(error.error.message, "Error", { timeOut: 2000 })
          this.toastr.error('Login failed', 'Error', { timeOut: 2000 });
        }
      );
    }
  }

  // enter email for reset password

  resetMail() {

    console.log(this.resetForm.get('email')?.value);
    console.log(this.resetForm.get('type')?.value);
    if (this.resetForm.get('type')?.value == 'student') {
      this.authService.forgetPasswordStudent(this.resetForm.get('email')?.value).subscribe(
        response => {
          //this.toastr.success(response?.message, "Success", { timeOut: 2000 })
          localStorage.setItem('email',this.resetForm.get('email')?.value)
          localStorage.setItem('role',this.resetForm.get('type')?.value)
          console.log(response);
          this.router.navigate(['/otpforpassword']);
        },
        error => {
          console.log(error)
          this.toastr.error(error.error.message, "Error", { timeOut: 2000 })
          //this.toastr.error('this email is not found', 'Error', { timeOut: 2000 });
        }

      );

    }
    else {
      this.authService.forgetPasswordCompany(this.resetForm.get('email')?.value).subscribe(
        response => {
          console.log(response);
          localStorage.setItem('email',this.resetForm.get('email')?.value)
          localStorage.setItem('role',this.resetForm.get('type')?.value)
          this.router.navigate(['/otpforpassword']);
        },
        error => {
          console.log(error)
          this.toastr.error(error.error.message, "Error", { timeOut: 2000 })
          //this.toastr.error('this email is not found', 'Error', { timeOut: 2000 });
        }

      );
    }

  }

}



