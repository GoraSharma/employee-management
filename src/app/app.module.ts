import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './shared/components/comfirmation-dialog/comfirmation-dialog.component';
import { AddOrSearchEmployeeComponent } from './components/add-or-search-employee/add-or-search-employee.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEmployeeComponent } from './components/add-or-edit-employee/add-or-edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    AddOrSearchEmployeeComponent,
    EmployeeDashboardComponent,
    EmployeeCardComponent,
    NavbarComponent,
    EditEmployeeComponent,
    AboutComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
