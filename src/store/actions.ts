import {
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
  FETCH_STATIC_CITIES_SUCCESS,
  FETCH_STATIC_CITIES_ERROR,
} from "./constants";
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

export const fetchStaticCitiesSuccess = (cities: CityProps) => {
  return {
    type: FETCH_STATIC_CITIES_SUCCESS,
    cities,
  };
};

export const fetchStaticCitiesError = (error: string) => {
  return {
    type: FETCH_STATIC_CITIES_ERROR,
    error,
  };
};
