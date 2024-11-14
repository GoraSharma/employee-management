import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../../model/employee';
import { EmployeeService } from './../../services/employee.service';
import { EditEmployeeComponent } from '../add-or-edit-employee/add-or-edit-employee.component';
import { ConfirmationDialogComponent } from '../../shared/components/comfirmation-dialog/comfirmation-dialog.component';

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
    //Fetch the employees data
    this.empService.employees$.subscribe((employeeDetails) => {
      this.employeesData = employeeDetails;
    });
  }

  // Open edit dialog
  openEditDialog(index: number) {
    this.selectedIndex = index;
    const editData = {
      action: 'edit',
      employeeDetails: this.employeesData[this.selectedIndex],
    };
    this.dialog.open(EditEmployeeComponent, {
      data: editData,
      width: '500px',
      maxHeight: '700px',
    });
  }

  // Open Delete Dialog
  openDeleteDialog(index: number) {
    this.selectedIndex = index;
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: '',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed the action
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
