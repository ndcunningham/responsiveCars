import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.type';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsApi = 'api/cars';
  getCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.carsApi);
  }
  constructor(private http: HttpClient) {}
}
