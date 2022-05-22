import {
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
  FETCH_COMPARE_CITIES_SUCCESS,
  FETCH_COMPARE_CITIES_ERROR,
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

export const fetchCompareCitiesSuccess = (cities: CityProps) => {
  return {
    type: FETCH_COMPARE_CITIES_SUCCESS,
    cities,
  };
};

export const fetchCompareCitiesError = (error: string) => {
  return {
    type: FETCH_COMPARE_CITIES_ERROR,
    error,
  };
};
