import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromRootActions from '../../actions';

import { Observable } from 'rxjs';
import { CarName } from 'src/app/models/car-name.type';
import { Availability } from 'src/app/models/availability.enum';

@Component({
  selector: 'app-car-filter',
  template: `
    <div class="nav-conatainer">
      Filter by
      <div>
        Name:
        <select [ngModel]="selectedName" (ngModelChange)="selectName($event)">
          <option selected [value]="null">All</option>
          <option *ngFor="let name of (names$ | async)" [ngValue]="name"> {{ name.value }} </option>
        </select>
      </div>
      <div>
        Availability:
        <select [ngModel]="selectedAvailability" (ngModelChange)="selectAvailability($event)">
          <option selected [value]="null">All</option>
          <option *ngFor="let availability of (availability$ | async)" [ngValue]="availability">
            {{ availability.value }}
          </option>
        </select>
      </div>
    </div>
  `,
  styles: [
    `
      .nav-conatainer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 1.5em;
        color: white;
        padding: 20px;
        background-color: #312940f2;
      }
    `
  ]
})
export class CarFilterComponent implements OnInit {
  names$: Observable<Array<CarName>>;
  availability$: Observable<Array<Availability>>;

  selectedName: CarName | null = null;
  selectedAvailability: Availability | null = null;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.names$ = this.store.pipe(select(fromRoot.getAllCarNames));
    this.availability$ = this.store.pipe(select(fromRoot.getAllAvalabilities));
  }

  selectName(name: CarName) {
    const nameId = name ? name.id : null;
    this.store.dispatch(new fromRootActions.HomePageActions.ChangeFilterName({ nameId }));
  }

  selectAvailability(availability: Availability) {
    const availabilityId = availability ? availability.id : null;
    this.store.dispatch(new fromRootActions.HomePageActions.ChangeFilterAvailability({ availabilityId }));
  }
}
