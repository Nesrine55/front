import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  resetFormPassword!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  public ngOnInit(): void {
    this.resetFormPassword = this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });
  }

  resetPassword(){
    const role= localStorage.getItem('role')||'';
    if(role === 'company'){
      this.authService.resetCompanyPassword(this.resetFormPassword.get('password')?.value, this.resetFormPassword.get('confirmPassword')?.value, localStorage.getItem("resetPasswordToken")!).subscribe(
        (response) => {
         // console.log('Your password is updated:', response);
          //this.toastr.success('Your password has been updated successfully.', 'Success');
          this.toastr.success(response?.message, "Success", { timeOut: 2000 })
          this.router.navigate(['/signin']);

          


        },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.message, "Error", { timeOut: 2000 })

         // this.toastr.error('An error occurred while updating your password. Please try again.', 'Error');   
             }
      );
    }else{
      
      this.authService.resetStudentPassword(this.resetFormPassword.get('password')?.value, this.resetFormPassword.get('confirmPassword')?.value, localStorage.getItem("resetPasswordToken")!).subscribe(
        (response) => {

          //console.log('Your password is updated:', response);
          this.toastr.success(response?.message, "Success", { timeOut: 2000 })

          //this.toastr.success('Your password has been updated successfully.', 'Success');
          this.router.navigate(['/signin']);

        },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.message, "Error", { timeOut: 2000 })

          //this.toastr.error('An error occurred while updating your password. Please try again.', 'Error');     
           }
      );
    }

  }

}
