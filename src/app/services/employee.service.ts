import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import  {Data} from '../models/data.model';
import "rxjs/add/operator/map";

@Injectable()
export class EmployeeService {

 constructor(private _http:Http) { }

  registerEmployee(employee){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
 
    return this._http.post('http://localhost:3000/api/register',employee,{ headers:headers }).map(res=>res.json());
  }



  getContacts(){
    
    return this._http.get('http://localhost:3000/api/getdata').map(res=>res.json());
  }





  getEmployee(){
    return [
      {
        id:1,
      name:"Sankar",
      gender:"Male",
      ContactPreference:"phoneNumber",
      email:"sankar64@gmail.com",
   
   
      dateOfBirth:new Date('05/29/1992'),
      department:"CSE",
      isActive:true,
      photoPath:"assets/images/download.jpg"
  
      },
      {
      id:2,
      name:"Krishnaveni",
      gender:"Female",
      ContactPreference:"email",
      email:"saidulu64@gmail.com",
      dateOfBirth:new Date('04/02/1993'),
      department:"EEE",
      isActive:true,
      photoPath:"assets/images/images.jpg"
  
      },
      {
        id:3,
        name:"Rani",
        gender:"Female",
        ContactPreference:"email",
        email:"saidulu64@gmail.com",
        dateOfBirth:new Date('2/22/1991'),
        department:"IT",
        isActive:true,
        photoPath:"assets/images/images.jpg"
    
        },
        {
          id:4,
        name:"Saidulu",
        gender:"Male",
        ContactPreference:"phoneNumber",
        email:"saidulu64@gmail.com",
     
     
        dateOfBirth:new Date('05/29/1992'),
        department:"EEE",
        isActive:true,
        photoPath:"assets/images/download.jpg"
    
        },
    
  
    ]

    
  }

}
