import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetoffersService } from '../services/getoffers.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';

@Component({
  selector: 'app-saved-offers',
  templateUrl: './saved-offers.component.html',
  styleUrls: ['./saved-offers.component.css']
})
export class SavedOffersComponent implements OnInit {
  offers!: any;
  constructor(
    private router: Router,
    private getOffer:GetoffersService,
    private userService: UserSettingsServiceService,
    private route: ActivatedRoute


  ) { }
  ngOnInit(): void {
    this.getOffer.getSaveStudentOffer().subscribe(
      (data) => {
        this.offers =data;
      },
      (error) => {
        console.error('Failed to retrieve saved student offers:', error);
        // Handle error cases
      }
    );
  }


  

}
