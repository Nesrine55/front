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
  private urlStudent = "http://localhost:5000/student/createStudent";
  private urlCompany = "http://localhost:5000/entreprise/registerCompany";



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


  signupStudent(user: Omit<user,"id">): Observable<user>{
    return this.http
    .post<user>(this.urlStudent, user,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<user>("signup"))
    );

  }
  signupCompany(user: Omit<user,"id">): Observable<user>{
    return this.http
      .post<user>(this.urlCompany, user,this.httpOptions)
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
