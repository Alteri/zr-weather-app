import { createSelector } from "reselect";
import { CityProps } from "../types";

export const selectedCitySelector = createSelector(
  (store: { selectedCity: CityProps }) => store.selectedCity,
  (selectedCity) => selectedCity
);

export const errorSelector = createSelector(
  (store: { error: string }) => store.error,
  (error) => error
);
