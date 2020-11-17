import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../models/car';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[cs-car-table-row]',
  templateUrl: './car-table-row.component.html'
})
export class CarTableRowComponent {
  @Input() car: Car;
  @Output() removedCar = new EventEmitter();

  removeCar(car: Car, event: any): void {
    event.stopPropagation();
    this.removedCar.emit(car);
  }
}
