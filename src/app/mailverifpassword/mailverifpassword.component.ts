import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mailverifpassword',
  templateUrl: './mailverifpassword.component.html',
  styleUrls: ['./mailverifpassword.component.css']
})
export class MailverifpasswordComponent {
  constructor(private authService: AuthService,private router: Router, private toastr: ToastrService){}

  code1 = '';
  code2 = '';
  code3 = '';
  code4 = '';


  verifyEmailforpassword(){
    const code = this.code1 +''+ this.code2 + ''+ this.code3 +''+ this.code4;
    const email = localStorage.getItem('email') || ''; // Retrieve the email from local storage or from a state management solution
    const role= localStorage.getItem('role')||''
    if(role === 'company'){
      this.authService.verifyOTPCompanyPassword(email, code).subscribe(
        (response) => {
         // console.log(response); // Handle success
         this.toastr.success(response?.message, "Success", { timeOut: 2000 })
          localStorage.setItem("resetPasswordToken", response.resetPasswordToken)
          this.router.navigate(["/forpassword"]);

        },
        (error) => {
          console.log(error); // Handle error
          this.toastr.error(error.error.message, "Error", { timeOut: 2000 })

        }
      );
    }else{
      this.authService.verifyOTPStudentPassword(email, code).subscribe(
        (response) => {
          //console.log(response); // Handle success
          this.toastr.success(response?.message, "Success", { timeOut: 2000 })
          localStorage.setItem("resetPasswordToken", response.resetPasswordToken)
          this.router.navigate(["/forpassword"]);
        },
        (error) => {
          console.log(error); // Handle error
          this.toastr.error(error.error.message, "Error", { timeOut: 2000 })

        }
      );
    }

  }

  resendCode() {
    const email = localStorage.getItem('email') || '';
  const role = localStorage.getItem('role') || '';
  if (role === 'company') {
    this.authService.resendVerificationCodePassC(email).subscribe(
      (response) => {
        console.log(response); // Handle success
        this.toastr.success('OTP has been resent successfully');
       // this.toastr.success(response?.message, "Success", { timeOut: 2000 })

      },
      (error) => {
        console.log(error); // Handle error
        //this.toastr.error(error.error.message, "Error", { timeOut: 2000 })
        this.toastr.error('Failed to resend OTP');
      }
    );
  } else {
    this.authService.resendVerificationCodePassS(email).subscribe(
      (response) => {
        console.log(response); // Handle success
        this.toastr.success('OTP has been resent successfully');
        //this.toastr.success(response?.message, "Success", { timeOut: 2000 })

      },
      (error) => {
        console.log(error); // Handle error
        this.toastr.error('Failed to resend OTP student');
        //this.toastr.error(error.error.message, "Error", { timeOut: 2000 })

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


}




}
