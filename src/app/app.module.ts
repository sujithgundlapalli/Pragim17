import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeTitlePipe } from './employee/employeeTitle.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeTitlePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
