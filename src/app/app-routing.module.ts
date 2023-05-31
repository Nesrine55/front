import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
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
import { MyprofilestudentsetComponent } from './myprofilestudentset/myprofilestudentset.component';
import { FaqComponent } from './faq/faq.component';
import { MailverifpasswordComponent } from './mailverifpassword/mailverifpassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AuthguardService } from './guards/authguard.service';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ExploreforcompanyComponent } from './exploreforcompany/exploreforcompany.component';
import { FavoriteOffersComponent } from './favorite-offers/favorite-offers.component';
import { SavedOffersComponent } from './saved-offers/saved-offers.component';
import { AppliedOffersComponent } from './applied-offers/applied-offers.component';
import { StudentHistoryComponent } from './student-history/student-history.component';
import { MyOffersCompanyComponent } from './my-offers-company/my-offers-company.component';
import { FavoriteProfilesComponent } from './favorite-profiles/favorite-profiles.component';
import { HistoryofferComponent } from './historyoffer/historyoffer.component';
import { ProfileCompanyDetailsComponent } from './profile-company-details/profile-company-details.component';
const routes: Routes = [
 
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
  {path:'company' , component:CompanydashboardComponent, canActivate:[AuthguardService], data: { role: 'company' } },
  {path:'companynav' , component:CompanynavbarComponent},
  {path:'studentnav' , component:StudentnavbarComponent},
  {path:'signin' , component:SiginComponent},
  {path:'studentsettings' , component:StudentsettingsComponent},
  {path:'studentprofile' , component:StudentprofileComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'studentprofiledetails/:id' , component:InternsreviewsComponent},
  {path:'offer' , component:CreateoffreComponent},
  {path:'offerdetails' , component:OffredetailsComponent},
  {path:'companyprofile' , component:CompanyprofileComponent},
  {path:'studentexplore' , component:StudentexplorepageComponent},
  {path:'myprofilestudentset' , component:MyprofilestudentsetComponent},
  {path:'faquestions' , component:FaqComponent},
  {path:'otpforpassword' , component:MailverifpasswordComponent},
  {path:'forpassword' , component:ForgetpasswordComponent},
  {path:'student' , component:InbordingComponent,canActivate:[AuthguardService], data: { role: 'student' }},
  {path:'userhome' , component:HomeuserComponent},
  {path:'companyexplore' , component:ExploreforcompanyComponent},
  {path:'favoroffer' , component:FavoriteOffersComponent},
  {path:'saveoffer' , component:SavedOffersComponent},
  {path:'applyoffer' , component:AppliedOffersComponent},
  {path:'studenthistory' , component:StudentHistoryComponent},
  {path:'myoffers' , component:MyOffersCompanyComponent},
  {path:'favorprofile' , component:FavoriteProfilesComponent},
  {path:'historycompany' , component:HistoryofferComponent},
  {path:'companydetails' , component:ProfileCompanyDetailsComponent},

  {path:'admin' , loadChildren:()=> import('./admin/admin.module').then((m)=>m.AdminModule)},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
