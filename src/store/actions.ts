import {
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
  ADD_COMPARE_CITIES_SUCCESS,
  ADD_COMPARE_CITIES_ERROR,
} from './constants';
import { CityProps } from '../types';

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

export const addCompareCitiesSuccess = (cities: CityProps) => {
  return {
    type: ADD_COMPARE_CITIES_SUCCESS,
    cities,
  };
};

export const addCompareCitiesError = (error: string) => {
  return {
    type: ADD_COMPARE_CITIES_ERROR,
    error,
  };
};
