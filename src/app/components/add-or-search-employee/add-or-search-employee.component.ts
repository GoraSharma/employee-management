import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../add-or-edit-employee/add-or-edit-employee.component';

@Component({
  selector: 'add-employee',
  templateUrl: './add-or-search-employee.component.html',
  styleUrls: ['./add-or-search-employee.component.css'],
})
export class AddOrSearchEmployeeComponent {
  @Output() searchTermChange = new EventEmitter<string>();
  constructor(private dialog: MatDialog) {}

  addNewDialog() {
    this.dialog.open(EditEmployeeComponent, {
      data: { action: 'add', employeeDetails: [] },
      width: '500px',
      maxHeight: '700px',
    });
  }

  onSearchChange(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.searchTermChange.emit(input);
  }
}
