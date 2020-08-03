import { CarResolve } from './car-resolve.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent],
  exports: [CarsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    CarResolve
  ]
})
export class CarsModule { }
