import { HomePageActions, CarsApiActions } from '../actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Car } from '../models/car.type';

export interface State extends EntityState<Car> {
  loading: boolean;
  loaded: boolean;
  error: string;
  selectedCarId: number | null;
}

export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>({ selectId: (car: Car) => car.id });

export const initialState = adapter.getInitialState({
  loading: false,
  loaded: false,
  error: '',
  selectedCarId: null
});

export function reducer(
  state = initialState,
  action: HomePageActions.HomePageActionsUnion | CarsApiActions.CarsApiActionUnion
): State {
  switch (action.type) {
    case HomePageActions.HomePageActionTypes.LOAD_CARS:
      return {
        ...state,
        loading: true
      };
    case CarsApiActions.CarsApiActionTypes.LOAD_CARS_SUCCESS:
      return adapter.addAll(action.payload.cars, { ...state, loaded: true });

    case CarsApiActions.CarsApiActionTypes.LOAD_CARS_FAILURE:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: `${action.payload.error}`
      };

    case HomePageActions.HomePageActionTypes.VIEW_CAR:
      return {
        ...state,
        selectedCarId: action.payload.id
      };
    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getError = (state: State) => state.error;
export const getSelectedId = (state: State) => state.selectedCarId;
