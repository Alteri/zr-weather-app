import { FETCH_CITY_SUCCESS, FETCH_CITY_ERROR } from "./constants";
import { CityProps } from "../types";

export const fetchCitySuccess = (city: CityProps) => {
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
