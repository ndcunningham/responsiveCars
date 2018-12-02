import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { HomePageActions, CarsApiActions } from '../actions';
import { CarService } from '../services/car.service';
import { AvailabilityService } from '../services/availability.service';

@Injectable()
export class CarsEffects {
  @Effect() cars$ = this.actions$.pipe(
    ofType(HomePageActions.HomePageActionTypes.LOAD_CARS),
    switchMap(() =>
      this.carService.getCars().pipe(
        map(cars => new CarsApiActions.LoadCarsSuccess({ cars })),
        catchError(error => observableOf(new CarsApiActions.LoadCarsFailure({ error })))
      )
    )
  );

  @Effect() loadAvailability$ = this.actions$.pipe(
    ofType(HomePageActions.HomePageActionTypes.LOAD_AVAILABILITY),
    switchMap(() =>
      this.availabilityService.loadAvailability().pipe(
        map(availability => new CarsApiActions.LoadAvailabilitySuccess({ availability })),
        catchError(error => observableOf(new CarsApiActions.LoadAvailabilityFailure({ error })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private carService: CarService,
    private availabilityService: AvailabilityService
  ) {}
}
