import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internsreviews',
  templateUrl: './internsreviews.component.html',
  styleUrls: ['./internsreviews.component.css']
})
export class InternsreviewsComponent implements OnInit{
  profiles!:any;
  constructor(private profilesService:ProfilesService,    
              private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.profilesService.profileId$.subscribe(id => {
      if (id) {
        this.profilesService.getProfilesStudentDetails(id).subscribe(data => {
          this.profiles = data;
        });
      }
    });
  }


}
