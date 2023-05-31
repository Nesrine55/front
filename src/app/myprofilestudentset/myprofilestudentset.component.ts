import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserSettingsServiceService } from '../services/user-settings-service.service';
import { user } from '../models/user';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-myprofilestudentset',
  templateUrl: './myprofilestudentset.component.html',
  styleUrls: ['./myprofilestudentset.component.css']
})



export class MyprofilestudentsetComponent implements OnInit {
  student!: any;
  profileForm!: FormGroup;
  id: any;
  skills!:any[];

  studentSkills!:any[]
  studentExperiences!:any[]
  studentProjects!:any[]
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserSettingsServiceService,
    private toastr: ToastrService
  ) { }

  

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bio: ['', [Validators.required]],
      studyEstablishment: ['', Validators.required],
      studyfield: ['', Validators.required],
      file: ['', Validators.required],
      streetAdress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      Postal: ['', Validators.required],
      Fb: ['', Validators.required],
      Number: ['', Validators.required],
      LinkedIn: ['', Validators.required],
      WhatsApp: ['', Validators.required],
      GitHub: ['', Validators.required],


      //experience
      TitreExperience: ['', Validators.required],
      PlaceExperience: ['', Validators.required],
      descriptionExperience: ['', Validators.required],
      DateExperience: ['', Validators.required],

      //project
      projectName: ['', Validators.required],
      startDate: ['', Validators.required],
      finDate: ['', Validators.required],
      projectStatus: ['', Validators.required],

      //skill
      SkillId: ['', Validators.required],
      percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],

    });
   


    const data = JSON.parse(localStorage.getItem('data')!);
    this.id = data.userId;

    this.getUser()
    this.getSkills()
    this.addSkill()
    this.getMySkills()
    this.getExperience()
    this.getProject()
  }

  getUser() {
    this.userService.getUserById(this.id).subscribe(user => {
      console.log(user)
      this.profileForm.patchValue(user);
      this.student=user;
    },
      err => console.log(err));
  }


  //skill
  getMySkills(): void{
    this.userService.getMySkills(this.id).subscribe(
      (response) => {
        // this.profileForm.patchValue(user);

        this.studentSkills = response;
      },
      (error) => {
        console.log('An error occurred:', error);
      }
    );
  }
  addSkill(){
    

    const SkillId  = this.profileForm.get('SkillId')?.value;
    const percentage  = this.profileForm.get('percentage')?.value;
    console.log(SkillId)
    console.log(percentage)
    this.userService.AddSkill({SkillId,percentage}).subscribe(
     
      response => {
        // Handle the success response from the server
        console.log('You added a new skill', response);
        this.toastr.success('You added a new skill');
        // Reset the form
      },
      error => {
        // Handle the error response from the server
        console.error('Error submitting form data:', error);
      }
     
    );
  }


  getSkills() {
    this.userService.getSkills().subscribe(
     (response) => {
      if (response) {
        this.skills = response;
      } else {
        this.skills = []; // or handle the empty response case as per your requirements
      }
    },
    (error) => {
      console.error(error);
    }

    )
  }

////experience

AddExperience(){
  
  console.log(this.profileForm.value);


    this.userService.AddExperience(this.profileForm.value).subscribe(
     
      response => {
        // Handle the success response from the server
        console.log('Form data successfully submitted:', response);
        this.toastr.success('Your experience has been added successfully');

        // Reset the form
        this.profileForm.reset();
      },
      error => {
        // Handle the error response from the server
        console.error('Error submitting form data:', error);
      }
     
    );
}
getExperience(){
  this.userService.getMyExperience().subscribe(
    (data) => {
      this.studentExperiences = data;
    },
    (error) => {
      console.log('An error occurred:', error);
    }
  );
}

///projects

AddProject(){
  
  console.log(this.profileForm.value);


    this.userService.AddProject(this.profileForm.value).subscribe(
     
      response => {
        // Handle the success response from the server
        console.log('Form data successfully submitted:', response);
        this.toastr.success('Your project has been added successfully');

        // Reset the form
        this.profileForm.reset();
      },
      error => {
        // Handle the error response from the server
        console.error('Error submitting form data:', error);
      }
     
    );
}
getProject(){
  this.userService.getMyProject().subscribe(
    (data) => {
      this.studentProjects = Object.values(data);
    },
    (error) => {
      console.log('An error occurred:', error);
    }
  );
}


  
  onSubmit() {


    const updatedUser: user = this.profileForm.value;
    this.userService.updateUser(updatedUser, this.id).subscribe((res) => {
      console.log(res);
      this.toastr.success('your informations has been updated successfully');

      this.getUser();
    }, 
    (err) => {
      console.log(err);
    }
    );
  }

}

