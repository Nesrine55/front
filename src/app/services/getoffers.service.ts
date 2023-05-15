import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetoffersService {
  private getOffer ='http://localhost:5000/offer/getOffers';
  private createOffer ='http://localhost:5000/offer/addOffer';


  constructor(private http: HttpClient) { }

  getOffers(): Observable<any> {
    return this.http.get<any>(this.getOffer);
  }

// create offer
}
