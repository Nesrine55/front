import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbordingComponent } from './inbording/inbording.component';
import { NavComponent } from './nav/nav.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HelppageComponent } from './helppage/helppage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { DiscoverpageComponent } from './discoverpage/discoverpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { MailvalidateComponent } from './mailvalidate/mailvalidate.component';
import { StudentsettingsComponent } from './studentsettings/studentsettings.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { CompanynavbarComponent } from './companynavbar/companynavbar.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InternsreviewsComponent } from './internsreviews/internsreviews.component';
import { CreateoffreComponent } from './createoffre/createoffre.component';
import { OffredetailsComponent } from './offredetails/offredetails.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { StudentexplorepageComponent } from './studentexplorepage/studentexplorepage.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MyprofilestudentsetComponent } from './myprofilestudentset/myprofilestudentset.component';
import { FaqComponent } from './faq/faq.component';
import { MailverifpasswordComponent } from './mailverifpassword/mailverifpassword.component';
import { ToastrModule } from 'ngx-toastr';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AuthguardService } from './guards/authguard.service';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { HomeusernavbarComponent } from './homeusernavbar/homeusernavbar.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { ExploreforcompanyComponent } from './exploreforcompany/exploreforcompany.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InbordingComponent,
    HomenavbarComponent,
    SignupComponent,
    SiginComponent,
    HomepageComponent,
    HelppageComponent,
    AboutpageComponent,
    DiscoverpageComponent,
    ContactpageComponent,
    MailvalidateComponent,
    StudentsettingsComponent,
    CompanydashboardComponent,
    CompanynavbarComponent,
    StudentnavbarComponent,
    StudentprofileComponent,
    NavbarComponent,
    InternsreviewsComponent,
    CreateoffreComponent,
    OffredetailsComponent,
    CompanyprofileComponent,
    StudentexplorepageComponent,
    MyprofilestudentsetComponent,
    FaqComponent,
    MailverifpasswordComponent,
    ForgetpasswordComponent,
    HomeuserComponent,
    HomeusernavbarComponent,
    ExploreforcompanyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule, AdminModule, // required animations module

    

  ],
  providers: [AuthguardService,    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
