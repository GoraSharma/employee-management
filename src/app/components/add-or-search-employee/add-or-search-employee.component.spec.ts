import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrSearchEmployeeComponent } from './add-or-search-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddOrSearchEmployeeComponent;
  let fixture: ComponentFixture<AddOrSearchEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrSearchEmployeeComponent],
    });
    fixture = TestBed.createComponent(AddOrSearchEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
