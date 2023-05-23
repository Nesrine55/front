import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetoffersService {
  private getOffer ='http://localhost:5000/offer/getOffers';
  private createoffer ='http://localhost:5000/offer/addOffer';
  private getOfferCompany ='http://localhost:5000/offer/getOffersByCompanyId';
  private getDiscoverOffer ='http://localhost:5000/offer/getPopularOfferDiscover';


  constructor(private http: HttpClient) { }

  getOffers(): Observable<any> {
    return this.http.get<any>(this.getOffer);
  }

  getOfferscompany(id: string): Observable<any> {
    return this.http.get<any>(`${this.getOfferCompany}/${id}`);
  }

// create offer
createOffer(formData: any): Observable<any> {
  return this.http.post<any>(this.createoffer, formData);
}

//get discover offer

getPopularOffers(limit: number = 6) {
  const params = { popular: 'true', limit: limit.toString() };
  return this.http.get<any[]>(this.getDiscoverOffer, { params });
}

}
