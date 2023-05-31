import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private toastr: ToastrService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });

  }

  submitForm() {
    if (this.contactForm.invalid) {
      return;
    }
  
    const formData = this.contactForm.value;
  
    this.http.post('http://localhost:5000/contact/sendContactMessage', formData)
      .subscribe(
        () => {
          // Handle successful form submission
          console.log('Your message has been sent successfully');
          this.toastr.success('Your message has been sent successfully ');

          // Reset the form after successful submission
          this.contactForm.reset();
        },
        (error) => {
          // Handle error during form submission
          console.error('An error occurred while submitting the form:', error);
        }
      );
  }

  
}
