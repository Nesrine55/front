import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private urlSearchWithType = 'http://localhost:5000/student/searchoffers';
  constructor(private http: HttpClient) { }

  searchTypeJobs(type: string,locationId:number, domainOfferId:number): Observable<any[]> {
    const params = { type,locationId, domainOfferId };
    return this.http.get<any[]>(this.urlSearchWithType, { params });
  }

}
