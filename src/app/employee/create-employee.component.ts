import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Department} from '../models/department.model'
import {EmployeeService} from '../services/employee.service'
import { Empolyee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Empolyee[];
  previewPhotopath=false;
  departments:Department[]=[
    {
      id:1,
      name:"HelpDesk"
    },
    {
      id:2,
      name:"IT"
    },
    {
      id:3,
      name:"CSE"
    },
    {
      id:4,
      name:"ECE"
    }
  ]

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee=this._employeeService.getEmployee();
  }

  saveEmployeeFrom(empForm:NgForm):void{
    console.log(empForm.value);
  }

  togglePhotoPreview(){
    this.previewPhotopath=!this.previewPhotopath;
  }

}
