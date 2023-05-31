import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exploreforcompany',
  templateUrl: './exploreforcompany.component.html',
  styleUrls: ['./exploreforcompany.component.css']
})
export class ExploreforcompanyComponent implements OnInit{
  profiles!:any[];
  likeProfiles !:any[]
  constructor(private profilesService:ProfilesService,
    private router: Router,
    private toastr: ToastrService,

    ) { }

  ngOnInit(): void {
    this.profilesService.getProfilesStudent().subscribe(
      (data) => {
        this.profiles  = data;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );

    this.profilesService.getlikeProfile().subscribe(
      (data) => {
        this.likeProfiles  =data;
        console.log(data)
      },
      (error) => {
        console.error('Failed to retrieve favorite student offers:', error);
        // Handle error cases
      }
    );
}

viewProfile(id: number): void {
  this.router.navigate(['/studentprofiledetails',id]);
}




likeProfile(id:number){
  let studentId = id
  let companyId = JSON.parse(localStorage.getItem('data')!).userId
  this.profilesService.likeStudentProfile(studentId, companyId).subscribe(

    response => {
      console.log('You liked this offer', response);
      this.toastr.success('You liked this offer');

    }
    , error => {
      console.error('Offer already liked ', error);
      this.toastr.error('Offer already liked ');

    }


  )
}
}


