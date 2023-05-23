import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from '../Adminmodel/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private urlLoginAdmin = "http://localhost:5000/auth/loginadmin";


  adminId!: Pick<admin, "id">;



  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) { }

  loginadmin(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post <any>(this.urlLoginAdmin, body);

  }


  // loginadmin(email: string, password: string): Observable<any> {
  // const admin = { email, password };
  // return this.http.post<admin>(`${this.urlLoginAdmin}`, admin, this.httpOptions);
  // }
}
