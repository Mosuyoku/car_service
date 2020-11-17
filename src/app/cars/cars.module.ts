import { CostSharedService } from './cost-shared.service';
import { CarResolve } from './car-resolve.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IncomeTaxComponent } from './total-cost/income-tax/income-tax.component';
import { CarTableRowComponent } from './car-table-row/car-table-row.component';



@NgModule({
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent, IncomeTaxComponent, CarTableRowComponent],
  exports: [CarsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    CarResolve,
    CostSharedService
  ]
})
export class CarsModule { }
