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

  onSearchTermChange(searchTerm: string) {
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      this.filteredEmployees = this.employeesData.filter(
        (employee) =>
          employee.name.toLowerCase().includes(lowercasedTerm) ||
          employee.emailId.toLowerCase().includes(lowercasedTerm)
      );
      this.empService.employees.next(this.filteredEmployees);
    } else {
      this.filteredEmployees = EmployeDetailsMockData; // Reset to the full list if the search term is empty
      this.empService.employees.next(this.filteredEmployees);
    }
  }
}
