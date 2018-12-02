import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Car } from 'src/app/models/car.type';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import * as fromRootActions from '../../actions';

@Component({
  selector: 'app-view-car-page',
  template: '<app-car-detail></app-car-detail>'
})
export class ViewCarPageComponent implements OnDestroy {
  car$: Observable<Car>;
  subscription: Subscription;

  constructor(store: Store<any>, route: ActivatedRoute) {
    this.subscription = route.params
      .pipe(
        tap(p => console.log({ p })),
        map(params => new fromRootActions.HomePageActions.ViewCar({ id: params.id }))
      )
      .subscribe(store);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
