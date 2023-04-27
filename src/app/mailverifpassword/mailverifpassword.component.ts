import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mailverifpassword',
  templateUrl: './mailverifpassword.component.html',
  styleUrls: ['./mailverifpassword.component.css']
})
export class MailverifpasswordComponent {
  code1 = '';
  code2 = '';
  code3 = '';
  code4 = '';

  constructor(private authService: AuthService,private router: Router){}

 /* verifyEmail() {


    const OTP = this.code1 +''+ this.code2 +''+ this.code3 +''+ this.code4;

    console.log(OTP)
    const email = localStorage.getItem('email')?? ''; // Retrieve the email from local storage or from a state management solution
    const role = localStorage.getItem('role')?? ''; // Retrieve the email from local storage or from a state management solution

    console.log(email)
    if (email && role ) {
      if(role === 'company'){
        //verfiy company
        this.authService.verifyEmaicompany(email, OTP).subscribe(
          (response) => {
            console.log('OTP code verified:', response); // Handle success
          },
          (error) => {
            console.log('Error verifying OTP code:', error); // Handle error
          }
        );     
      }else{
        //verfiy student
        this.authService.verifyEmailstudent(email, OTP).subscribe(
          (response) => {
            this.router.navigate(['/signin']);
            console.log('OTP code verified:', response); // Handle success
          },
          (error) => {
            console.log('Error verifying OTP code:', error); // Handle error
          }
        ); 
      }

    }

  }

  resendCode() {
    const email = localStorage.getItem('email')?? ''; // Retrieve the email from local storage or from a state management solution
    if (email) {
    this.authService.resendVerificationCode(email)&&this.authService.resendVerificationCodestudent(email).subscribe(
      (response) => {
        console.log('OTP code verified:', response); // Handle success
      },
      (error) => {
        console.log('Error verifying OTP code:', error); // Handle error
      }
    );
    }
  }

  public ngOnInit(){

    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button") as HTMLButtonElement;
    inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
    
    const currentInput = input as HTMLInputElement;
    const nextInput = input.nextElementSibling as HTMLInputElement | null;
    const prevInput = input.previousElementSibling as HTMLInputElement | null;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", "true");
          input.value = "";
          prevInput.focus();
        }
      });
    }
    
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

window.addEventListener("load", () => (inputs[0] as HTMLInputElement).focus());


}*/
}
