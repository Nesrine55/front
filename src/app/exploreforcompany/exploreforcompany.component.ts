import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
@Component({
  selector: 'app-exploreforcompany',
  templateUrl: './exploreforcompany.component.html',
  styleUrls: ['./exploreforcompany.component.css']
})
export class ExploreforcompanyComponent implements OnInit{
  profiles!:any[];
  constructor(private profilesService:ProfilesService) { }

  ngOnInit(): void {
    this.profilesService.getProfilesStudent().subscribe(
      (data) => {
        this.profiles = data;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );


}

}
