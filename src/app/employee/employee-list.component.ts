import { Component, OnInit } from '@angular/core';
import { Empolyee } from '../models/employee.model';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Empolyee[];

  

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee=this._employeeService.getEmployee();
  }

}
