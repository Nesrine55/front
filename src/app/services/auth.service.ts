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
  private urlUser = "http://localhost:5000/auth/registerUser";
  private urlCompany = "http://localhost:5000/auth/registerCompany";



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


  signupUser(user: Omit<user,"id">): Observable<user>{
    return this.http
    .post<user>(`${this.urlUser}/signup`, user,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<user>("signup"))
    );

  }
  signupCompany(user: Omit<user,"id">): Observable<user>{
    return this.http
    .post<user>(`${this.urlCompany}/signup`, user,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<user>("signup"))
    );

  }

/*
  login(
    email: Pick<user,"email">,
    password: Pick<user,"password">
    ): Observable<{ token: string; userId: Pick<user, "id">; }> {
    return this.http
    .post<TokenObject>(`${this.urlUser}/login`, {email,password},this.httpOptions)
    .pipe(
      first(),
      tap((tokenObject: TokenObject) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(["posts"]);
      }),
      catchError(this.errorHandlerService.handleError<TokenObject>("login"))
    );
  }
*/
}
