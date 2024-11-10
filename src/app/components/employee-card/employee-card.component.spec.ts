import { EmployeDetailsMockData } from './../../mocks/employee.mock';
import { ConfirmationDialogComponent } from './../../shared/components/comfirmation-dialog/comfirmation-dialog.component';
import { EmployeeService } from './../../services/employee.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardComponent } from './employee-card.component';
import { of } from 'rxjs';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { EditEmployeeComponent } from '../add-or-edit-employee/add-or-edit-employee.component';

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  let fixture: ComponentFixture<EmployeeCardComponent>;
  let employeeService: EmployeeService;

  const dialogRefMock = {
    close: jest.fn(),
    open: jest.fn(),
    afterClosed: jest.fn(() => of(true)),
  } as unknown as MatDialogRef<ConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCardComponent],
      imports: [MatDialogModule],
      providers: [
        EmployeeService,
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(EmployeeCardComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO : need to complete
  // it('should open edit dialog with the correct employee data', () => {
  //   const index = 0;
  //   const data = {
  //     action: 'edit',
  //     employeeDetails: EmployeDetailsMockData[index],
  //   };
  //   component.employeesData = EmployeDetailsMockData;

  //   component.openEditDialog(index);
  //   expect(dialogRefMock).toHaveBeenCalledWith(EditEmployeeComponent, {
  //     data: data,
  //     width: '500px',
  //     maxHeight: '700px',
  //   });
  // });
});
