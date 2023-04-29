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

  private urlUser = "http://localhost:5000/student/createStudent";
  private urlCompany = "http://localhost:5000/entreprise/registerCompany";
  private urlmailvalidationCompany = "http://localhost:5000/entreprise/verifyOTP1";
  private urlmailvalidationStudent = "http://localhost:5000/student/verifyOTP";
  private resendurl = "";
  private loginstudent = "http://localhost:5000/auth/login";
  private logincompany = "http://localhost:5000/auth/login1";
  private urlForgetPasswordCompany = "http://localhost:5000/auth/forgetpasswordCompany";
  private urlForgetPasswordStudent = "http://localhost:5000/auth/forgotPasswordStudent";




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


  signupUser(user: Omit<user, "id">): Observable<any> {
    return this.http
      .post<user>(`${this.urlUser}`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<user>("signup"))
      );

  }
  signupCompany(user: Omit<user, "id">): Observable<any> {
    return this.http
      .post<user>(`${this.urlCompany}`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<user>("signup"))
      );

  }


  verifycodeCompany(email: string, otp: string): Observable<any> {
    const body = {
      email: email,
      OTP: otp
    };

    return this.http.post(`${this.urlmailvalidationCompany}`, body);
  }
  verifycodeStudent(email: string, otp: string): Observable<any> {
    const body = {
      email: email,
      OTP: otp
    };

    return this.http.post(`${this.urlmailvalidationStudent}`, body);
  }

  resendVerificationCode(email: string): Observable<any> {
    return this.http.post(`${this.resendurl}`, { email });
  }


  getUserRole(): string {
    return this.role;

  }

  loginStudent(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post(this.loginstudent, body);

  }
  loginCopmany(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post(this.logincompany, body);
  }
  public getisAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  //forget password service

  forgetPasswordCompany(email: string) {

    return this.http.post(this.urlForgetPasswordCompany, email)
  }


  forgetPasswordStudent(email: string) {
    return this.http.post(this.urlForgetPasswordStudent, email)
  }


  /*loginCopmany(email: string, password: string){
    return this.http.post(`${this.logincompany}`, { email, password }).subscribe(
      (_response) => {
        console.error('User found');
        this.isAuthenticated = true;
        // Navigate the user to their dashboard based on their role
      },
      (error) => {
        if (error.status === 404) {
          // handle user not found error
          console.error('User not found');
        } else if (error.status === 401) {
          // handle incorrect password error
          console.error('Incorrect password');
        } else {
          // handle other errors
          console.error('An error occurred:', error.message);
        }
      }
    );
  }
  */





}
