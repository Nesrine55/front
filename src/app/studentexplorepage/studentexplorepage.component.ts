import { Component, OnInit } from '@angular/core';
import { GetoffersService } from '../services/getoffers.service';

@Component({
  selector: 'app-studentexplorepage',
  templateUrl: './studentexplorepage.component.html',
  styleUrls: ['./studentexplorepage.component.css']
})
export class StudentexplorepageComponent implements OnInit{
  offers!: any[];
  constructor(private getOffer:GetoffersService) { }

  ngOnInit(): void {
    this.getOffer.getOffers().subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );

  }

}
