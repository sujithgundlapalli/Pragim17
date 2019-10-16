  import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from '../employee.service';

  @Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
  })
  export class EmployeeComponent implements OnInit, OnChanges  {
    // employees: { code: string; name: string; gender: string; annualSalary: number; dateOfBirth: string; }[];
    selectedEmployeeCountRadioButton: string = 'All';
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
      this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    @Input()
    childtext: string;
    ngOnChanges(changes:SimpleChanges){
        for(let propertyName  in changes)
        {
          let change = changes[propertyName];
          let current = JSON.stringify(change.currentValue);
          let previous = JSON.stringify(change.previousValue);
          // console.log('property name'+propertyName+': previous value - '+previous+': Current Value - '+current);
          console.log(`property name ${propertyName} previous value - ${previous} Current Value - ${current}`);
        }
    }


    employees: IEmployee[];
    constructor(private _EmployeeService:EmployeeService) {
      // this.employees = [
      //   {
      //     code: 'emp101', name: 'Tom', gender: 'Male',
      //     annualSalary: 5500, dateOfBirth: '2/16/1988'
      //   },
      //   {
      //     code: 'emp102', name: 'Alex', gender: 'Male',
      //     annualSalary: 5700.95, dateOfBirth: '9/6/1982'
      //   },
      //   {
      //     code: 'emp103', name: 'Mike', gender: 'Male',
      //     annualSalary: 5900, dateOfBirth: '12/8/1979'
      //   },
      //   {
      //     code: 'emp104', name: 'Mary', gender: 'Female',
      //     annualSalary: 6500.826, dateOfBirth: '1/10/1980'
      //   },
      //   {
      //     code: 'emp105', name: 'Nancy', gender: 'Female',
      //     annualSalary: 6700.826, dateOfBirth: '5/12/1982'
      //   },
      // ];
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
      this.employees = this._EmployeeService.getEmployees();
    }

    trackByEmpCode(index: number, employee: any): string {
      return employee.code;
    }
  }


