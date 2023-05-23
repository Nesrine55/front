import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private getprofiles ='http://localhost:5000/entreprise/getprofiles';
  private getprofilesDetails ='http://localhost:5000/entreprise/getStudentprofilesID';



  private profileIdSource = new Subject<number>();
  profileId$ = this.profileIdSource.asObservable();

  constructor(private http: HttpClient) { }

  getProfilesStudent(): Observable<any> {
    return this.http.get<any>(this.getprofiles);
  }
  getProfilesStudentDetails(id: number): Observable<any> {
    return this.http.get<any>(this.getprofilesDetails);
    this.profileIdSource.next(id);

  }
 

}
