import { Component , OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetoffersService } from '../services/getoffers.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-favorite-profiles',
  templateUrl: './favorite-profiles.component.html',
  styleUrls: ['./favorite-profiles.component.css']
})
export class FavoriteProfilesComponent implements OnInit{
  profiles!:any
  constructor(
    private router: Router,
    private userService: UserSettingsServiceService,
    private route: ActivatedRoute,
    private profilesService:ProfilesService,


  ) { }
  ngOnInit(): void {
    this.profilesService.getlikeProfile().subscribe(
      (data) => {
        this.profiles =data;
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
  
}
