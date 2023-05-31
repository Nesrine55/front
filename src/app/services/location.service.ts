import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private selectedLocationSubject = new BehaviorSubject<string>('');
  selectedLocation$ = this.selectedLocationSubject.asObservable();

  updateSelectedLocation(location: string) {
    this.selectedLocationSubject.next(location);
  }
}
