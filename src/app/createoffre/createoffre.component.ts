import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetoffersService } from '../services/getoffers.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-createoffre',
  templateUrl: './createoffre.component.html',
  styleUrls: ['./createoffre.component.css']
})
export class CreateoffreComponent implements OnInit {
  createofferform!: FormGroup;
  Locations !:any [];
  Domains !:any [];
  constructor(private formBuilder: FormBuilder,
    private getOffer: GetoffersService,
    private toastr: ToastrService,
  ) { }
  ngOnInit() {
    this.createofferform = this.formBuilder.group({
      title: ['', Validators.required],
      technology: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      type: ['Full-time', Validators.required],
      internship_level: ['Mid-Level', Validators.required],
      locationId: ['', Validators.required],
      specificAddress: ['', Validators.required],
      pictures: ['', Validators.required],
      description: ['', [Validators.required]],
      domainOfferId: ['', [Validators.required]],
      duration: ['', [Validators.required]]


    });

    this.getLocation()
    this.getDomains()
  }


  createoffer() {
    console.log(this.createofferform.value);


    this.getOffer.createOffer(this.createofferform.value).subscribe(
     
      response => {
        // Handle the success response from the server
        console.log('Form data successfully submitted:', response);
        this.toastr.success('Your Offer has been added successfully');

        // Reset the form
        this.createofferform.reset();
      },
      error => {
        // Handle the error response from the server
        console.error('Error submitting form data:', error);
      }
     
    );
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
}


