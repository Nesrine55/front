import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetoffersService } from '../services/getoffers.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';

@Component({
  selector: 'app-favorite-offers',
  templateUrl: './favorite-offers.component.html',
  styleUrls: ['./favorite-offers.component.css']
})
export class FavoriteOffersComponent implements OnInit{
  offers!: any;
  constructor(
    private router: Router,
    private getOffer:GetoffersService,
    private userService: UserSettingsServiceService,
    private route: ActivatedRoute


  ) { }


  ngOnInit(): void {
    this.getOffer.getlikeStudentOffer().subscribe(
      (data) => {
        this.offers =data;
        console.log(data)
      },
      (error) => {
        console.error('Failed to retrieve favorite student offers:', error);
        // Handle error cases
      }
    );
  }
}
