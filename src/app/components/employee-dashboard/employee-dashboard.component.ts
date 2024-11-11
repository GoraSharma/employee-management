import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Component, OnInit } from '@angular/core';
import { EmployeDetailsMockData } from 'src/app/mocks/employee.mock';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  employeesData: Employee[] = [];
  filteredEmployees: Employee[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.employees$.subscribe((data) => {
      this.employeesData = data;
    });
  }
}
