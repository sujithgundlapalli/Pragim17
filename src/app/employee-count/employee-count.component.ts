import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  selectedRadioButtonValue: string = 'All';
  constructor() { }
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();
  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged
      .emit(this.selectedRadioButtonValue);
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      this[propertyName] = changes[propertyName].currentValue;
      // let change = changes[propertyName];
      // let current = JSON.stringify(change.currentValue);
      // let previous = JSON.stringify(change.previousValue);
      // console.log(`property name ${propertyName} previous value - ${previous} Current Value - ${current}`);
    }
  }

}
