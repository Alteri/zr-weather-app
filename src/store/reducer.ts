import { fetchCitySuccess, fetchCityError } from "./actions";
import { FETCH_CITY_SUCCESS, FETCH_CITY_ERROR } from "./constants";
import { CityProps } from "../types";

const initialState = {
  selectedCity: {
    location: { name: "", country: "" },
    current: { temp_c: 0, wind_kph: 0, humidity: 0, cloud: 0 },
  },
  error: false,
};

type ActionType = ReturnType<typeof fetchCitySuccess | typeof fetchCityError>;

export const rootReducer = (
  state: { selectedCity: CityProps } = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        selectedCity: action.city,
        error: false,
      };
    case FETCH_CITY_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
