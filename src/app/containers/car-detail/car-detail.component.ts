import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.type';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  car$: Observable<Car>;
  constructor(private store: Store<any>) {
    this.car$ = this.store.pipe(select(fromRoot.getSelectedCar));
  }

  ngOnInit() {}
}
