import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { GetoffersService } from '../services/getoffers.service';

@Component({
  selector: 'app-inbording',
  templateUrl: './inbording.component.html',
  styleUrls: ['./inbording.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class InbordingComponent implements OnInit{

  offers!: any[];

  constructor(private getOffer:GetoffersService){}


  ngOnInit(): void {
    this.fetchPopularOffersStudent();

  }
  fetchPopularOffersStudent(): void {
    this.getOffer.getPopularOffersforstudent().subscribe(
      (response) => {
        this.offers = response;
      },
      (error) => {
        console.error('Error fetching popular offers:', error);
      }
    );
  }
 

}
