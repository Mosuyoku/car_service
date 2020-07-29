import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars';
  randomValue = Math.random();
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

}
