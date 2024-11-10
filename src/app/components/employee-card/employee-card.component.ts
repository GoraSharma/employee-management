import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/comfirmation-dialog/comfirmation-dialog.component';
import { EditEmployeeComponent } from '../add-or-edit-employee/add-or-edit-employee.component';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  employeesData: Employee[] = [];
  selectedIndex: number = 0;

  constructor(private empService: EmployeeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.empService.employees$.subscribe((employeeDetails) => {
      this.employeesData = employeeDetails;
    });
  }

  openEditDialog(index: number) {
    this.selectedIndex = index;
    const data = {
      action: 'edit',
      employeeDetails: this.employeesData[this.selectedIndex],
    };
    this.dialog.open(EditEmployeeComponent, {
      data: data,
      width: '500px',
      maxHeight: '700px',
    });
  }

  openDeleteDialog(index: number) {
    this.selectedIndex = index;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: '',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed the action (e.g., delete employee)
        this.deleteEmployee();
      }
    });
  }

  // Delete a employee after user confirms
  deleteEmployee() {
    const selectedEmployee = this.employeesData[this.selectedIndex];
    this.empService.deleteEmployee(selectedEmployee.emailId);
  }
}
