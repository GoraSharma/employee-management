import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeDetailsMockData } from '../mocks/employee.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = new BehaviorSubject<Employee[]>(EmployeDetailsMockData);

  // Observable to expose the employee data
  employees$ = this.employees.asObservable();

  // Method to add a new employee
  addEmployee(employee: Employee): void {
    const currentEmployees = this.employees.value;
    this.employees.next([...currentEmployees, employee]);
  }

  // Method to edit an existing employee
  editEmployee(updatedEmployee: Employee): void {
    const currentEmployees = this.employees.value.map((emp) =>
      emp.emailId === updatedEmployee.emailId ? updatedEmployee : emp
    );
    this.employees.next(currentEmployees);
  }

  // Method to delete an employee
  deleteEmployee(emailId: string): void {
    const updatedEmployees = this.employees.value.filter(
      (emp) => emp.emailId !== emailId
    );
    this.employees.next(updatedEmployees);
  }
}
