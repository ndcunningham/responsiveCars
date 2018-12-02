import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { HomePageActions } from '../../actions';
import { Observable } from 'rxjs';

import { Car } from '../../models/car.type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cars$: Observable<Array<Car>>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.cars$ = this.store.pipe(select(fromRoot.getCars));

    this.store.dispatch(new HomePageActions.LoadCars());
    this.store.dispatch(new HomePageActions.LoadAvailability());
  }
}
