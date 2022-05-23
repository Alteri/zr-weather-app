import {
  fetchCitySuccess,
  fetchCityError,
  addCompareCitiesSuccess,
  addCompareCitiesError,
} from './actions';
import {
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
  ADD_COMPARE_CITIES_SUCCESS,
  ADD_COMPARE_CITIES_ERROR,
} from './constants';
import { CityProps } from '../types';

const initialState = {
  selectedCity: {
    location: { name: '', country: '' },
    current: {
      temp_c: 0,
      wind_kph: 0,
      humidity: 0,
      cloud: 0,
      condition: { text: '' },
    },
    forecast: {
      forecastday: [
        {
          date: '',
          day: {
            avgtemp_c: 0,
          },
        },
      ],
    },
  },
  cities: [],
  error: false,
  errorCompare: false,
  isPending: true,
};

type ActionType = ReturnType<
  | typeof fetchCitySuccess
  | typeof fetchCityError
  | typeof addCompareCitiesSuccess
  | typeof addCompareCitiesError
>;

export const rootReducer = (
  state: {
    selectedCity: CityProps;
    cities: CityProps[];
  } = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        selectedCity: action.city,
        error: false,
        isPending: false,
      };
    case FETCH_CITY_ERROR:
      return {
        ...state,
        error: action.error,
        isPending: false,
      };
    case ADD_COMPARE_CITIES_SUCCESS:
      return {
        ...state,
        cities: [...state.cities, action.cities],
        errorCompare: false,
      };
    case ADD_COMPARE_CITIES_ERROR:
      return {
        ...state,
        errorCompare: action.error,
      };
    default:
      return state;
  }
};
