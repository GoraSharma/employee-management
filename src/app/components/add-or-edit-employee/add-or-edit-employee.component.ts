import { EmployeeService } from '../../services/employee.service';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddOrEditModalData, Employee } from '../../model/employee';
import { AvatarsImages } from '../../mocks/avatar-urls.mock';

@Component({
  selector: 'edit-employee',
  templateUrl: './add-or-edit-employee.component.html',
  styleUrls: ['./add-or-edit-employee.component.css'],
})
export class EditEmployeeComponent {
  employeeForm: FormGroup;
  avatars = AvatarsImages;
  // Choose action edit/delete
  action = '';
  employees: Employee[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddOrEditModalData,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = new FormGroup({
      name: new FormControl<string>(
        data.employeeDetails?.name ?? '',
        Validators.required
      ),
      companyName: new FormControl<string>(
        data.employeeDetails?.companyName ?? '',
        Validators.required
      ),
      emailId: new FormControl<string>(data.employeeDetails?.emailId ?? '', [
        Validators.email,
        Validators.required,
      ]),
      designation: new FormControl<string>(
        data.employeeDetails?.designation ?? '',
        Validators.required
      ),
      contactNumber: new FormControl<number>(
        data.employeeDetails?.contactNumber ?? 0,
        [Validators.maxLength(10), Validators.required]
      ),
      avatar: new FormControl<string>(
        data.employeeDetails?.avatar ?? '',
        Validators.required
      ),
    });
    this.action = data.action;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      // If action is edit , edit the employee details
      if (this.action === 'edit') {
        this.employeeService.editEmployee(this.employeeForm.value);
        this.onCancel();
      } // If action is add, add the new employee details
      else if (this.action === 'add') {
        this.employeeService.addEmployee(this.employeeForm.value);
      }
      this.onCancel();
    }
  }

  onConfirm(): void {
    this.dialogRef.close(true); // Return true on confirm
  }

  onCancel(): void {
    this.dialogRef.close(false); // Return false on cancel
  }

  selectAvatar(src: string) {
    this.employeeForm.get('avatar')?.setValue(src);
  }
}
