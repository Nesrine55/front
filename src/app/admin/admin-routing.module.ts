import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

const routes: Routes = [
  {path: '', component:SigninComponent},
  {path: 'signin', redirectTo:''},
  {path: 'mydashboard', component:DashboardAdminComponent},
  {path: 'adnavbar', component:AdminnavbarComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
