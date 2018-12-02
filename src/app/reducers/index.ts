import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromHomePage from './home-page.reducer';
import * as fromCarNames from './car-names.reducer';
import * as fromAvailability from './car-availability.reducer';

import { environment } from '../../environments/environment';

export interface State {
  cars: fromHomePage.State;
  names: fromCarNames.State;
  availability: fromAvailability.State;
}

export const reducers: ActionReducerMap<State> = {
  cars: fromHomePage.reducer,
  names: fromCarNames.reducer,
  availability: fromAvailability.reducer
};

export const getRootState = createFeatureSelector<State>('root');

export const getCarsEntitiesState = createFeatureSelector<State, fromHomePage.State>('cars');

export const getSelectedCarId = createSelector(
  getCarsEntitiesState,
  fromHomePage.getSelectedId
);

export const {
  selectIds: getCarIds,
  selectEntities: getCarEntities,
  selectAll: getAllCars,
  selectTotal: getTotalCars
} = fromHomePage.adapter.getSelectors(getCarsEntitiesState);

export const getNamesEntitiesState = createFeatureSelector<State, fromCarNames.State>('names');

export const getSelectedNameId = createSelector(
  getNamesEntitiesState,
  fromCarNames.getSelectedId
);

export const {
  selectIds: getCarNameIds,
  selectEntities: getCarNameEntities,
  selectAll: getAllCarNames,
  selectTotal: getTotalCarNames
} = fromCarNames.adapter.getSelectors(getNamesEntitiesState);

export const getAvailabilityEntitiesState = createFeatureSelector<State, fromAvailability.State>('availability');

export const getSelectedAvailabilityId = createSelector(
  getAvailabilityEntitiesState,
  fromAvailability.getSelectedId
);

export const {
  selectIds: getAvailabilityIds,
  selectEntities: getAvailabilityEntities,
  selectAll: getAllAvalabilities,
  selectTotal: getTotalAvailabilities
} = fromAvailability.adapter.getSelectors(getAvailabilityEntitiesState);

export const getSelectedCar = createSelector(
  getCarEntities,
  getSelectedCarId,
  (entities, id) => {
    return id && entities[id];
  }
);

export const getCars = createSelector(
  getAllCars,
  getCarNameEntities,
  getSelectedNameId,
  getSelectedAvailabilityId,
  (cars, names, selectedName, selectedAvail) => {
    if (selectedName && selectedAvail) {
      const name = names[selectedName].value.toLowerCase();
      return cars.filter(car => car.availabilityId === selectedAvail && car.name.toLowerCase().includes(name));
    } else if (selectedName) {
      const name = names[selectedName].value.toLowerCase();
      return cars.filter(car => car.name.toLowerCase().includes(name));
    } else if (selectedAvail) {
      return cars.filter(car => car.availabilityId === selectedAvail);
    } else {
      return cars;
    }
  }
);

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];
