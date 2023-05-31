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

  private getPopularOfferStudent ='http://localhost:5000/offer/getPopularOffer';
  private getDiscoverOffer ='http://localhost:5000/offer/getPopularOfferDiscover';

  private urlAddSavedOffer ='http://localhost:5000/savedoffers/savedOffer';
  private urlGetSavedOffers ='http://localhost:5000/savedoffers/getSavedoffer';

  private urlAddFavoriteOffer ='http://localhost:5000/favorisOffers/savedfavorisoffer';
  private urlGetLikedOffers ='http://localhost:5000/favorisOffers/getfavoris';

  private urlGetLocationForOffers ='http://localhost:5000/location/getLocation';
  private urlGetDomainsForOffers ='http://localhost:5000/domainOffer/getDomain';

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

//get popular offer for student dashboard
getPopularOffersforstudent(limit: number = 3) {
  const params = { popular: 'true', limit: limit.toString() };
  return this.http.get<any[]>(this.getPopularOfferStudent, { params });
}

//saved offers
saveStudentOffer(offerId:number,studentId:number):Observable<any> {
  const body = {
    offerId: offerId,
    studentId: studentId
  };

  return this.http.post(this.urlAddSavedOffer,body)


}

getSaveStudentOffer(): Observable<any>  {
  return this.http.get<any>(this.urlGetSavedOffers);
}

//favorite offers

likeStudentOffer(offerId:number,studentId:number):Observable<any> {
  const body = {
    offerId: offerId,
    studentId: studentId
  };

  return this.http.post(this.urlAddFavoriteOffer,body)


}

getlikeStudentOffer(): Observable<any>  {
  return this.http.get<any>(this.urlGetLikedOffers);
}


///////////


getAllLocations(): Observable<any> {
  return this.http.get<any>(this.urlGetLocationForOffers);
}


getAllDomains(): Observable<any> {
  return this.http.get<any>(this.urlGetDomainsForOffers);
}
}
