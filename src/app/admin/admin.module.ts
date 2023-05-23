import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';


@NgModule({
  declarations: [
    SigninComponent,
    DashboardAdminComponent,
    AdminnavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
