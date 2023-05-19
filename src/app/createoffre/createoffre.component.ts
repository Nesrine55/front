import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetoffersService } from '../services/getoffers.service';
@Component({
  selector: 'app-createoffre',
  templateUrl: './createoffre.component.html',
  styleUrls: ['./createoffre.component.css']
})
export class CreateoffreComponent implements OnInit {
  createofferform!: FormGroup;

  constructor(private formBuilder: FormBuilder, private getOffer:GetoffersService) {}
  ngOnInit() {
    this.createofferform = this.formBuilder.group({
      title: ['', Validators.required],
      technology: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      type: ['Full-time', Validators.required],
      internship_level: ['Mid-Level', Validators.required],
      location: ['', Validators.required],
      specificAddress: ['', Validators.required],
      pictures: ['', Validators.required],
      description: ['', [Validators.required]],
      domain: ['', [Validators.required]],
      duration: ['', [Validators.required]]


    });
  }


  createoffer() {
    console.log(this.createofferform.value);

    
      const formData = this.createofferform.value;
      this.getOffer.createOffer(formData).subscribe(
        response => {
          // Handle the success response from the server
          console.log('Form data successfully submitted:', response);
          // Reset the form
          this.createofferform.reset();
        },
        error => {
          // Handle the error response from the server
          console.error('Error submitting form data:', error);
        }
      );
    } 


   }


