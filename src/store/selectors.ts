import { createSelector } from 'reselect';
import { CityProps } from '../types';

export const selectedCitySelector = createSelector(
  (store: { selectedCity: CityProps }) => store.selectedCity,
  (selectedCity) => selectedCity
);

export const comparedCitySelector = createSelector(
  (store: { cities: CityProps[] }) => store.cities,
  (cities) => cities
);
