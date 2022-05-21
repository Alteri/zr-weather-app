import { FETCH_CITY_SUCCESS, FETCH_CITY_ERROR } from "./constants";

export const fetchCitySuccess = (city: any) => {
  return {
    type: FETCH_CITY_SUCCESS,
    city,
  };
};

export const fetchCityError = (error: string) => {
  return {
    type: FETCH_CITY_ERROR,
    error,
  };
};
