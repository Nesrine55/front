import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsServiceService {
  private urlgetstudentInfo ='http://localhost:5000/student/getProfile';
  private urlputStudentInfo ='http://localhost:5000/student/updateUser';
//settings Company
  private urlgetcompanyInfo ='http://localhost:5000/entreprise/getEntreprise';
  private urlputcompanyInfo ='http://localhost:5000/entreprise/updateCompny';



  constructor(private http: HttpClient) {}



  getUserById(id: string): Observable<user> {
    return this.http.get<user>(`${this.urlgetstudentInfo}/${id}`);
  }



  updateUser(user: user, id:any): Observable<user> {
    return this.http.put<user>(`${this.urlputStudentInfo}/${id}`, user);
  }


  //Company
  getCompanyById(id: string): Observable<user> {
    return this.http.get<user>(`${this.urlgetcompanyInfo}/${id}`);
  }



  updateCompany(user: user, id:any): Observable<user> {
    return this.http.put<user>(`${this.urlputcompanyInfo}/${id}`, user);
  }

 
 /* updateData(userId: string,formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    const url = `${this.urlputStudentInfo}/${userId}`;

    return this.http.put(url, formData, options);
  }*/
}
