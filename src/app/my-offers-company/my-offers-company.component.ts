import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetoffersService } from '../services/getoffers.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';
import { user } from '../models/user';

@Component({
  selector: 'app-my-offers-company',
  templateUrl: './my-offers-company.component.html',
  styleUrls: ['./my-offers-company.component.css']
})
export class MyOffersCompanyComponent implements OnInit{
  offers!: any[];
  id: any;
  profileCompanyForm: any;
  company!: any;

  constructor(
    private router: Router,
    private getOffer:GetoffersService,
    private userService: UserSettingsServiceService,


  ) { }


  
  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('data')!);
    this.id = data.userId;

    this.getOffer.getOfferscompany(this.id).subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );
 }


}
