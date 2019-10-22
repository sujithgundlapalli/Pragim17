import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges {
  selectedEmployeeCountRadioButton: string = 'All';
  totalEmpCount: number = 0;
  totalMaleCount: number = 0;
  totalFemaleCount: number = 0;
  
  @Input()
  childtext: string;
  
  employees = [];
  constructor(private _EmployeeService: EmployeeService) {

  }
  getEmployeeCount(): number {
    return this.employees.length;
  }
  getMaleEmployeeCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }
  getFemaleEmployeeCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }
  ngOnInit() {
    this._EmployeeService.getEmployees()
      .subscribe(
        (success) => {
        this.employees = success,
          this.totalEmpCount = this.employees.length;
          this.totalMaleCount = this.getMaleEmployeeCount();
          this.totalFemaleCount = this.getFemaleEmployeeCount();
        },
        (error) => { console.error(error) }
      );
  }
  // Radio change
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  // ng on changes poc on input box
  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(`property name ${propertyName} previous value - ${previous} Current Value - ${current}`);
    }
  }
  // For for loop dom performance
  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
}


