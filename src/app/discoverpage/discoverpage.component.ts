import { Component, OnInit } from '@angular/core';
import { GetoffersService } from '../services/getoffers.service';
@Component({
  selector: 'app-discoverpage',
  templateUrl: './discoverpage.component.html',
  styleUrls: ['./discoverpage.component.css']
})
export class DiscoverpageComponent implements OnInit{
 
  offers!: any[];


constructor(private getOffer:GetoffersService){}


  ngOnInit(): void {

    this.fetchPopularOffers();

  }
  fetchPopularOffers(): void {
    this.getOffer.getPopularOffers().subscribe(
      (response) => {
        this.offers = response;
      },
      (error) => {
        console.error('Error fetching popular offers:', error);
      }
    );
  }
}








