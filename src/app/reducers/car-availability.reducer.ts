import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { HomePageActions, CarsApiActions } from '../actions';
import { Availability } from '../models/availability.enum';

export interface State extends EntityState<Availability> {
  selectedAvailability: number | null;
}

export const adapter: EntityAdapter<Availability> = createEntityAdapter<Availability>({
  selectId: (availability: Availability) => availability.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({ selectedAvailability: null });

export function reducer(
  state = initialState,
  action: HomePageActions.HomePageActionsUnion | CarsApiActions.CarsApiActionUnion
): State {
  switch (action.type) {
    case CarsApiActions.CarsApiActionTypes.LOAD_AVAILABILITY_SUCCESS:
      return adapter.addAll(action.payload.availability, state);
    case HomePageActions.HomePageActionTypes.CHANGE_AVAILABILITY:
      if (action.payload.availabilityId) {
        return { ...state, selectedAvailability: action.payload.availabilityId };
      } else {
        return {
          ...state,
          selectedAvailability: null
        };
      }
    default:
      return state;
  }
}

export const getSelectedId = (state: State) => state.selectedAvailability;
