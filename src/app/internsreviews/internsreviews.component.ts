import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSettingsServiceService } from '../services/user-settings-service.service';

@Component({
  selector: 'app-internsreviews',
  templateUrl: './internsreviews.component.html',
  styleUrls: ['./internsreviews.component.css']
})
export class InternsreviewsComponent implements OnInit{
  profileDetails!:any;
  id: any;



  constructor(private profilesService:ProfilesService,    
              private route: ActivatedRoute,
              private userService: UserSettingsServiceService,
              ) { }




  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.profilesService.getProfilesStudentDetails(this.id).subscribe(
      (response) => {
        this.profileDetails = response;
        console.log(this.profileDetails)
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    )


    // const data = JSON.parse(localStorage.getItem('data')!);
    // this.id = data.userId;

    // this.getUser()

  


  //   this.profilesService.id((id: number) => {
  //     if (id) {
  //       this.profilesService.getProfilesStudentDetails(id).subscribe(data => {
  //         this.profileDetails = data;
  //       });
  //     }
  //   });
  // }

  
  }

}
