import { Action } from '@ngrx/store';
import { Car } from '../models/car.type';
import { Availability } from '../models/availability.enum';

export enum CarsApiActionTypes {
  LOAD_CARS_SUCCESS = '[Cars Api] Load Cars Success',
  LOAD_CARS_FAILURE = '[Cars Api] Load Cars Failure',
  GET_CAR_SUCCESS = '[Cars Api] Get Car Success',
  GET_CAR_FAILURE = '[Cars Api] Get Car Failure',
  LOAD_AVAILABILITY_SUCCESS = '[Cars Api] Load Availability Success',
  LOAD_AVAILABILITY_FAILURE = '[Cars Api] Load Availability Failure'
}

export class LoadCarsSuccess implements Action {
  readonly type = CarsApiActionTypes.LOAD_CARS_SUCCESS;

  constructor(public payload: { cars: Array<Car> }) {}
}

export class LoadCarsFailure implements Action {
  readonly type = CarsApiActionTypes.LOAD_CARS_FAILURE;

  constructor(public payload: { error: any }) {}
}

export class GetCarSuccess implements Action {
  readonly type = CarsApiActionTypes.GET_CAR_SUCCESS;

  constructor(public payload: { car: Car }) {}
}

export class GetCarFailure implements Action {
  readonly type = CarsApiActionTypes.GET_CAR_FAILURE;

  constructor(public payload: { error: any }) {}
}

export class LoadAvailabilitySuccess implements Action {
  readonly type = CarsApiActionTypes.LOAD_AVAILABILITY_SUCCESS;

  constructor(public payload: { availability: Array<Availability> }) {}
}

export class LoadAvailabilityFailure implements Action {
  readonly type = CarsApiActionTypes.LOAD_AVAILABILITY_FAILURE;

  constructor(public payload: { error: any }) {}
}

export type CarsApiActionUnion =
  | LoadCarsSuccess
  | LoadCarsFailure
  | GetCarSuccess
  | GetCarFailure
  | LoadAvailabilitySuccess
  | LoadAvailabilityFailure;
