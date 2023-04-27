import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { CompanynavbarComponent } from './companynavbar/companynavbar.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { CreateoffreComponent } from './createoffre/createoffre.component';
import { DiscoverpageComponent } from './discoverpage/discoverpage.component';
import { HelppageComponent } from './helppage/helppage.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InbordingComponent } from './inbording/inbording.component';
import { InternsreviewsComponent } from './internsreviews/internsreviews.component';
import { MailvalidateComponent } from './mailvalidate/mailvalidate.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffredetailsComponent } from './offredetails/offredetails.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentexplorepageComponent } from './studentexplorepage/studentexplorepage.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentsettingsComponent } from './studentsettings/studentsettings.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { MyprofilestudentsetComponent } from './myprofilestudentset/myprofilestudentset.component';
import { FaqComponent } from './faq/faq.component';
import { MailverifpasswordComponent } from './mailverifpassword/mailverifpassword.component';

const routes: Routes = [
  {path:'inbording' , component:InbordingComponent},
  {path:'menu' , component:MenuComponent},
  {path:'nav' , component:NavComponent},
  {path:'about' , component:AboutpageComponent},
  {path:'contact' , component:ContactpageComponent},
  {path:'discover' , component:DiscoverpageComponent},
  {path:'help' , component:HelppageComponent},
  {path:'homenavbar' , component:HomenavbarComponent},
  {path:'' , component:HomepageComponent},
  {path:'mailvalidate' , component:MailvalidateComponent},
  {path:'signup' , component:SignupComponent},
  {path:'company' , component:CompanydashboardComponent},
  {path:'companynav' , component:CompanynavbarComponent},
  {path:'studentnav' , component:StudentnavbarComponent},
  {path:'signin' , component:SiginComponent},
  {path:'studentsettings' , component:StudentsettingsComponent},
  {path:'studentprofile' , component:StudentprofileComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'internreview' , component:InternsreviewsComponent},
  {path:'adminpage' , component:AdmindashboardComponent},
  {path:'offer' , component:CreateoffreComponent},
  {path:'offerdetails' , component:OffredetailsComponent},
  {path:'companyprofile' , component:CompanyprofileComponent},
  {path:'studentexplore' , component:StudentexplorepageComponent},
  {path:'adminnav' , component:AdminnavbarComponent},
  {path:'myprofilestudentset' , component:MyprofilestudentsetComponent},
  {path:'faquestions' , component:FaqComponent},
  {path:'otpforpassword' , component:MailverifpasswordComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
