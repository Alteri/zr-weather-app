import { fetchCitySuccess, fetchCityError } from "./actions";
import { FETCH_CITY_SUCCESS, FETCH_CITY_ERROR } from "./constants";

const initialState = {
  selectedCity: {},
  error: false,
};

type ActionType = ReturnType<typeof fetchCitySuccess | typeof fetchCityError>;

export const rootReducer = (
  state: { selectedCity: any } = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        selectedCity: action.city,
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
