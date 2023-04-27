import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


import {  Observable,BehaviorSubject } from 'rxjs';
import { first,catchError, tap } from 'rxjs/operators';

import { user } from '../models/user';
import { ErrorHandleService } from './error-handle.service';
//import { TokenObject } from './token-object';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlUser = "http://localhost:5000/student/createStudent";
  private urlCompany = "http://localhost:5000/entreprise/registerCompany";
  private urlmailvalidationCompany = "http://localhost:5000/entreprise/verifyOTP1";
  private urlmailvalidationStudent = "http://localhost:5000/student/verifyOTP";
private resendurl ="";
private loginstudent ="http://localhost:5000/auth/login";
private logincompany ="http://localhost:5000/auth/login1";




  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

  userId!: Pick<user, "id">;

  httpOptions: { headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandleService,
    private router : Router
    ) { }


  signupUser(user: Omit<user,"id">): Observable<any>{
    return this.http
    .post<user>(`${this.urlUser}`, user,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<user>("signup"))
    );

  }
  signupCompany(user: Omit<user,"id">): Observable<any>{
    return this.http
    .post<user>(`${this.urlCompany}`, user,this.httpOptions)
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
      otp: otp
    };
    
    return this.http.post(`${this.urlmailvalidationStudent}`, body);
  }
    
  resendVerificationCode(email: string): Observable<any> {
    return this.http.post(`${this.resendurl}`, { email });
  }
  loginStudent(email:string, password:string){
    const body = { email: email, password: password };
    return this.http.post(this.loginstudent, body);

  }
  loginCopmany(email:string, password:string){
    const body = { email: email, password: password };
    return this.http.post(this.logincompany, body);

  }
}
