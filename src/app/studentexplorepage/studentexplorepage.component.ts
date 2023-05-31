import { Component, OnInit } from '@angular/core';
import { GetoffersService } from '../services/getoffers.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-studentexplorepage',
  templateUrl: './studentexplorepage.component.html',
  styleUrls: ['./studentexplorepage.component.css']
})
export class StudentexplorepageComponent implements OnInit{
  ///////search offer type

  jobTypes: string[] = ['Part-time', 'Full-time', 'Remote'];
  type: string = '';
  jobResults!: any[];
  
  
  
  ///////
  offers!: any[];

  createofferform!: FormGroup;

  Locations !:any [];
  Domains !:any [];
  constructor(private getOffer:GetoffersService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private searchservice:SearchService
    ) { }




  ngOnInit(): void {
    this.createofferform = this.formBuilder.group({
      
      // type: ['Full-time', Validators.required],
      locationId: ['', Validators.required],
      domainOfferId: ['', [Validators.required]],
      type: [''],
      

    });

    this.getLocation()
    this.getDomains()



    this.getOffer.getOffers().subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );

  }
  saveOffer(id:number){
    let offerId = id
    let studentId = JSON.parse(localStorage.getItem('data')!).userId
    this.getOffer.saveStudentOffer(offerId, studentId).subscribe(

      response => {
        console.log('Your Offer has been saved successfully', response);
        this.toastr.success('Your Offer has been saved successfully');

      }
      , error => {
        console.error('Offer already saved ', error);
        this.toastr.error('Offer already saved ');

      }


    )
  }


  getDomains() {
    this.getOffer.getAllDomains().subscribe(
     (response) => {
      if (response) {
        this.Domains = response;
      } else {
        this.Domains = []; // or handle the empty response case as per your requirements
      }
    },
    (error) => {
      console.error(error);
    }

    )
  }
  
//////loactions


getLocation() {
  this.getOffer.getAllLocations().subscribe(
   (response) => {
    if (response) {
      this.Locations = response;
    } else {
      this.Locations = []; // or handle the empty response case as per your requirements
    }
  },
  (error) => {
    console.error(error);
  }

  )
}


  
  likeOffer(id:number){
    let offerId = id
    let studentId = JSON.parse(localStorage.getItem('data')!).userId
    this.getOffer.likeStudentOffer(offerId, studentId).subscribe(

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



  searchJobs() {
    const selectedJobTypeControl = this.createofferform.get('type');
    const selectedJobLocationControl = this.createofferform.get('locationId');
    const selectedJobDomainControl = this.createofferform.get('domainOfferId');
  
    if (selectedJobTypeControl && selectedJobLocationControl && selectedJobDomainControl) {
      const type = selectedJobTypeControl.value;
      const locationId = selectedJobLocationControl.value;
      const domainOfferId = selectedJobDomainControl.value;
  
      this.searchservice.searchTypeJobs(type, locationId, domainOfferId)
        .subscribe(
          offers => {
            this.offers = offers;
          },
          error => {
            console.error('An error occurred while fetching job offers:', error);
            // Handle the error appropriately (e.g., display an error message)
          }
        );
    }
  }

}
