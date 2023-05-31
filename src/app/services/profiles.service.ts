import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private getprofiles ='http://localhost:5000/entreprise/getprofiles';
  private getprofilesDetails ='http://localhost:5000/entreprise/getStudentprofilesID';
  private urlAddFavoriteProfile ='http://localhost:5000/Profiles/favorisProfile';
  private urlGetFavoriteProfile ='http://localhost:5000/Profiles/getFavorisProfileById';



  id: any;



  // private profileIdSource = new Subject<number>();
  // profileId$ = this.profileIdSource.asObservable();

  constructor(private http: HttpClient) { }

  getProfilesStudent(): Observable<any> {
    return this.http.get<any>(this.getprofiles);
  }
  getProfilesStudentDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.getprofilesDetails}/${id}`);

  }

  
  // getUserById(id: string): Observable<user> {
  //   return this.http.get<user>(`${this.getprofilesDetails}/${id}`);
  // }
 

//favorite profiles

  likeStudentProfile(studentId:number,companyId:number):Observable<any> {
    const body = {
      studentId: studentId,
      companyId: companyId
    };
  
    return this.http.post(this.urlAddFavoriteProfile,body)
  
  
  }

  getlikeProfile(): Observable<any>  {
    return this.http.get<any>(this.urlGetFavoriteProfile);
  }


}
