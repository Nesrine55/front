import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { throwError } from 'rxjs';

import { Observable, BehaviorSubject } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';

import { user } from '../models/user';
import { ErrorHandleService } from './error-handle.service';
//import { TokenObject } from './token-object';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  public role = '';
  public isAuthenticated = false;


  // sign up users
  private urlUser = "http://localhost:5000/student/createStudent";
  private urlCompany = "http://localhost:5000/entreprise/registerCompany";



  private urlmailvalidationCompany = "http://localhost:5000/entreprise/verifyOTP1";
  private urlmailvalidationStudent = "http://localhost:5000/student/verifyOTP";

  
  private urlResendOTPPasswordCompany = "http://localhost:5000/auth/resendOtpC";
  private urlResendOTPPasswordStudent = "http://localhost:5000/auth/resendOtp";


  private loginstudent = "http://localhost:5000/auth/login";
  private logincompany = "http://localhost:5000/auth/login1";


  private urlForgetPasswordCompany = "http://localhost:5000/auth/forgetpasswordCompany";
  private urlForgetPasswordStudent = "http://localhost:5000/auth/forgotPasswordStudent";


  private urlsendOTPPasswordCompany = "http://localhost:5000/auth/verifyOTPCompany";
  private urlsendOTPPasswordStudent = "http://localhost:5000/auth/verifyOTPStudent";


  private urlresetPasswordStudent = "http://localhost:5000/auth/resetPasswordStudent";
  private urlresetPasswordCompany = "http://localhost:5000/auth/restePasswordCompny";


  private urlsendOTPRegisterCompany = "http://localhost:5000/entreprise/ResendOtpCRegister";
  private urlsendOTPRegisterStudent = "http://localhost:5000/student/resendOTPStudent";




  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

  userId!: Pick<user, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandleService,
    private router: Router
  ) { }


  // sign up users

  signupUser(user: Omit<user, "id">): Observable<any> {
    return this.http
      .post<user>(`${this.urlUser}`, user, this.httpOptions)
     /* .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<user>("signup"))
      );*/

  }
  signupCompany(user: Omit<user, "id">): Observable<any> {
    return this.http
      .post<user>(`${this.urlCompany}`, user, this.httpOptions)
      //.pipe(
      //  first(),
      //  catchError(this.errorHandlerService.handleError<user>("signup"))
      //);

  }




// send OTP for register users
  verifycodeCompany(email: string, otp: string): Observable<any> {
    const body = {
      email: email,
      OTP: otp
    };

    return this.http.post(this.urlmailvalidationCompany, body);
  }
  verifycodeStudent(email: string, otp: string): Observable<any> {
    const body = {
      email: email,
      OTP: otp
    };

    return this.http.post(this.urlmailvalidationStudent, body);
  }
//resend code register
 /* resendVerificationCodePassC(email: string): Observable<any> {
    return this.http.post(`${this.urlResendOTPPasswordCompany}`, { email });
  }
  resendVerificationCodePassS(email: string): Observable<any> {
    return this.http.post(`${this.urlResendOTPPasswordStudent}`, { email });
  }
*/


//resend code OTP

resendVerificationCodePassC(email: string): Observable<any> {

  return this.http.post(this.urlResendOTPPasswordCompany, {email:email});
}
resendVerificationCodePassS(email: string): Observable<any> {

  return this.http.post(this.urlResendOTPPasswordStudent, {email:email});
}




// login users
  getUserRole(): string {
    return this.role;

  }

  loginStudent(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post <any>(this.loginstudent, body);

  }
  loginCopmany(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post<any>(this.logincompany, body);
  }
  public getisAuthenticated(): boolean {
    return this.isAuthenticated;
  }
//create a session for user
  /*isLoggedIn() {
    return this.cookieService.get('token') !== '';
  }*/


  //forget password service

  forgetPasswordCompany(email: string) {
console.log(email);
    return this.http.post(this.urlForgetPasswordCompany, {email})
  }


  forgetPasswordStudent(email: string) {
    return this.http.post(this.urlForgetPasswordStudent, {email})
  }





//send OTP code for reset password
  verifyOTPCompanyPassword(email: string, otp: string): Observable<any> {
    const body = {
      email: email,
      OTP: otp
    };

    return this.http.post(this.urlsendOTPPasswordCompany, body);
  }
  verifyOTPStudentPassword(email: string, otp: string): Observable<any> {
    const body = {
      email: email,
      OTP: otp
    };

    return this.http.post(this.urlsendOTPPasswordStudent, body);
  }





//reset password

  resetStudentPassword(password: string, confirmpassword: string, resetPasswordToken:string): Observable<any> {
    const body = {
      password,
      confirmpassword,
      resetPasswordToken
    };

    return this.http.post(this.urlresetPasswordStudent, body);
  }
  resetCompanyPassword(password: string, confirmpassword: string, resetPasswordToken:string): Observable<any> {
    const body = {
      password,
      confirmpassword,
      resetPasswordToken
    };

    return this.http.post(this.urlresetPasswordCompany, body);
  }



  //get user information from local storage
  /*getCurrentUser(){
    const userString = localStorage.getItem('data');
    if (userString) {
      const currentUser = JSON.parse(userString) as user;
      return currentUser.id;
    } else {
      return null;
    }
  }*/


}
