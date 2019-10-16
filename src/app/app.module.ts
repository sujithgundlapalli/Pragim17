import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeTitlePipe,
    EmployeeCountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
