export interface Employee {
  name: string;
  companyName: string;
  emailId: string;
  contactNumber: number;
  designation: string;
  avatar: string;
}

export interface AddOrEditModalData {
  employeeDetails: Employee;
  action: string;
}
