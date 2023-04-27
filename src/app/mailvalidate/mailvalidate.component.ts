import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mailvalidate',
  templateUrl: './mailvalidate.component.html',
  styleUrls: ['./mailvalidate.component.css']
})
export class MailvalidateComponent {
  constructor(private authService: AuthService){}

  code1 = '';
  code2 = '';
  code3 = '';
  code4 = '';


  verifyEmail() {
    const code = this.code1 +''+ this.code2 + ''+ this.code3 +''+ this.code4;
    const email = localStorage.getItem('email') || ''; // Retrieve the email from local storage or from a state management solution
    const role= localStorage.getItem('role')||''
    if(role === 'company'){
      this.authService.verifycodeCompany(email, code).subscribe(
        (response) => {
          console.log(response); // Handle success
        
        },
        (error) => {
          console.log(error); // Handle error
        }
      );
    }else{
      this.authService.verifycodeStudent(email, code).subscribe(
        (response) => {
          console.log(response); // Handle success
        
        },
        (error) => {
          console.log(error); // Handle error
        }
      );
    }

  }
  resendCode() {
    const email = localStorage.getItem('email') ||''; // Retrieve the email from local storage or from a state management solution

    this.authService.resendVerificationCode(email).subscribe(
      (response) => {
        console.log(response); // Handle success
      },
      (error) => {
        console.log(error); // Handle error
      }
    );
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


}









}
