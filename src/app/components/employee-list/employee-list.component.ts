import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee.model';
import { EmployeesService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeesService) { }


  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
  }
}
