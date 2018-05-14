import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from "@angular/router";
import { Empolyee } from '../../models/employee.model';

import {Data} from '../../models/data.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data:Data[];
  


  name:String;
  email:String;
  password:String;

  constructor(
    private employeeservice:EmployeeService,
    private router:Router,
    private flashMessage:FlashMessagesService
  ) { }


  ngOnInit() {
    this.employeeservice.getContacts().subscribe(datas => this.data = datas);
  }

  getContacts(){
        this.employeeservice.getContacts().subscribe(item =>{
          this.data = item;
        console.log("data service:"+this.data[0].email);
        })
  };

  onRegister(emp) {
    
    const employee ={

      name: this.name,
      email: this.email,
     
      password: this.password

    }

    this.employeeservice.registerEmployee(employee).subscribe(data=>{
      // if(data.success){
      //   this.flashMessage.show("successfully registerd", { cssClass: 'alert alert-success', timeout: 3000 });
      //   this.router.navigate(['/home']);
      //  }else{
      //   this.flashMessage.show("You went wrong pleage enter current email and password", { cssClass: 'alert alert-success', timeout: 3000 });
      //   this.router.navigate(['/register']);

      //  }
      this.data.push(data);
      console.log("sucess");
    });
    


  }


}
