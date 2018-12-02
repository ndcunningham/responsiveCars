import { Action } from '@ngrx/store';

import { Car } from '../models/car.type';
import { Availability } from '../models/availability.enum';

export enum HomePageActionTypes {
  LOAD_CARS = '[Home Page] Load Cars',
  LOAD_AVAILABILITY = '[Home Page] Load Availability',
  GET_CAR = '[Home Page] Get Car',
  CHANGE_AVAILABILITY = '[Home Page] Change Availability',
  CHANGE_FILTER_NAME = '[Home Page] Change Filter Name',
  VIEW_CAR = '[Home Page] View Car'
}

export class LoadCars implements Action {
  readonly type = HomePageActionTypes.LOAD_CARS;
}

export class ChangeFilterAvailability implements Action {
  readonly type = HomePageActionTypes.CHANGE_AVAILABILITY;

  constructor(public payload: { availabilityId: number }) {}
}

export class ChangeFilterName implements Action {
  readonly type = HomePageActionTypes.CHANGE_FILTER_NAME;

  constructor(public payload: { nameId: number }) {}
}

export class ViewCar implements Action {
  readonly type = HomePageActionTypes.VIEW_CAR;

  constructor(public payload: { id: number }) {}
}

export class LoadAvailability implements Action {
  readonly type = HomePageActionTypes.LOAD_AVAILABILITY;
}

export type HomePageActionsUnion = LoadCars | ChangeFilterAvailability | ChangeFilterName | ViewCar | LoadAvailability;
