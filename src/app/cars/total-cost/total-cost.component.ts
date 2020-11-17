import { CarsService } from './../cars.service';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalCostComponent implements OnChanges{

  @Input() totalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT = 1.23;
  costTreshold: number = 10000;
  isCostTooLow: boolean = false;

  constructor(private carsService: CarsService){  }

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isCostTooLow = changes.totalCost.currentValue < this.costTreshold;

    console.log('previousValue', changes.totalCost.previousValue);
    console.log('currentValue', changes.totalCost.currentValue);
    console.log('firstChange', changes.totalCost.firstChange);
  }
}
