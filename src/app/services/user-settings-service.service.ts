import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsServiceService {
  private urlgetstudentInfo ='http://localhost:5000/student/profile';
  private urlputStudentInfo ='http://localhost:5000/student/updateUser';



  constructor(private http: HttpClient) {}



  getUserById(id: string): Observable<user> {
    return this.http.get<user>(`${this.urlgetstudentInfo}/${id}`);
  }



  updateUser(user: user, id:any): Observable<user> {
    return this.http.put<user>(`${this.urlputStudentInfo}/${id}`, user);
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
