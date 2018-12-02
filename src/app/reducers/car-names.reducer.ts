import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { CarName } from '../models/car-name.type';
import { HomePageActions, CarsApiActions } from '../actions';

export interface State extends EntityState<CarName> {
  selectedNameId: number | null;
}

export const adapter: EntityAdapter<CarName> = createEntityAdapter<CarName>({
  selectId: (carName: CarName) => carName.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedNameId: null
});

export function reducer(
  state = initialState,
  action: HomePageActions.HomePageActionsUnion | CarsApiActions.CarsApiActionUnion
): State {
  switch (action.type) {
    case CarsApiActions.CarsApiActionTypes.LOAD_CARS_SUCCESS:
      return adapter.addAll(action.payload.cars.map(car => ({ id: car.id, value: car.name })), state);
    case HomePageActions.HomePageActionTypes.CHANGE_FILTER_NAME:
      if (action.payload.nameId) {
        return { ...state, selectedNameId: action.payload.nameId };
      } else {
        return {
          ...state,
          selectedNameId: null
        };
      }
    default:
      return state;
  }
}

export const getSelectedId = (state: State) => state.selectedNameId;
