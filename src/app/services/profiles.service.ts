import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private getprofiles ='http://localhost:5000/entreprise/getprofiles';

  constructor(private http: HttpClient) { }

  getProfilesStudent(): Observable<any> {
    return this.http.get<any>(this.getprofiles);
  }

}
