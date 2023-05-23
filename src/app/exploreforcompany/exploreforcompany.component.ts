import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exploreforcompany',
  templateUrl: './exploreforcompany.component.html',
  styleUrls: ['./exploreforcompany.component.css']
})
export class ExploreforcompanyComponent implements OnInit{
  profiles!:any[];
  constructor(private profilesService:ProfilesService,
    private router: Router,
    ) { }

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

viewProfile(profileId: number) {
  this.profilesService.getProfilesStudentDetails(profileId);
  this.router.navigate(['/studentprofiledetails', profileId]);
}

}
