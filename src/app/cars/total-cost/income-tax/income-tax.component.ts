import { CostSharedService } from './../../cost-shared.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cs-income-tax',
  templateUrl: './income-tax.component.html'
})
export class IncomeTaxComponent implements OnInit, OnDestroy {
  private incomeTax: number = 18;
  income: number;
  costSubscription: Subscription;

  constructor(private costSharedService: CostSharedService) { }

  ngOnInit(): void {
    this.costSubscription = this.costSharedService.totalCostSource$.subscribe((cost) => {
      this.income = cost * this.incomeTax / 100;
    });
  }

  ngOnDestroy(): void {
    if (this.costSubscription){
      this.costSubscription.unsubscribe();
    }
  }
}
