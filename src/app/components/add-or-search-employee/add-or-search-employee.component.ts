import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../model/employee';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../add-or-edit-employee/add-or-edit-employee.component';
@Component({
  selector: 'add-employee',
  templateUrl: './add-or-search-employee.component.html',
  styleUrls: ['./add-or-search-employee.component.css'],
})
export class AddOrSearchEmployeeComponent implements OnInit {
  @Input() employeesData: Employee[] = [];
  originalEmployeeData: Employee[] = []; // Keep the original value
  filteredEmployees: Employee[] = [];
  constructor(private dialog: MatDialog, private empService: EmployeeService) {}

  ngOnInit() {
    // Saving the original value to be published when no employee matches
    this.originalEmployeeData = this.employeesData;
  }

  addNewDialog() {
    this.dialog.open(EditEmployeeComponent, {
      data: { action: 'add', employeeDetails: [] },
      width: '500px',
      maxHeight: '700px',
    });
  }

  onSearchChange(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    // Check if the entered value matches with name or email id
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      this.filteredEmployees = this.employeesData.filter(
        (employee) =>
          employee.name.toLowerCase().includes(lowercasedTerm) ||
          employee.emailId.toLowerCase().includes(lowercasedTerm)
      );
      this.empService.employees.next(this.filteredEmployees);
    } else {
      this.filteredEmployees = this.originalEmployeeData; // Reset to the full list if the search term is empty
      this.empService.employees.next(this.filteredEmployees);
    }
  }
}
