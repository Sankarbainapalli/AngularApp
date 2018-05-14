import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';

import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { HomeComponent } from './employee/home.component';
import { RegisterComponent } from './employee/register/register.component';

import { FlashMessagesModule } from 'angular2-flash-messages';

import {EmployeeService} from './services/employee.service';



const appRoute:Routes = [
  {path:'home',component:HomeComponent},
 {path:"list", component:EmployeeListComponent},
  {path:"create", component:CreateEmployeeComponent},
  {path:"register",component:RegisterComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"}];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    HomeComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,BsDatepickerModule.forRoot(),HttpClientModule,
    RouterModule.forRoot(appRoute),HttpModule ,FlashMessagesModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
