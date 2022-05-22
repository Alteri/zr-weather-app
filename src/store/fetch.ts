import axios from "axios";
import {
  fetchCitySuccess,
  fetchCityError,
  fetchStaticCitiesSuccess,
  fetchStaticCitiesError,
} from "./actions";

export const fetchCity = (city: string) => (dispatch: any) => {
  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=10&aqi=no&alerts=no&lang=pl`
    )
    .then((response) => {
      dispatch(fetchCitySuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCityError(error));
    });
};

const staticCities = ["Warszawa", "Krakow", "Wroclaw", "Lublin"];

export const fetchStaticCities = () => (dispatch: any) => {
  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${staticCities}&lang=pl`
    )
    .then((response) => {
      dispatch(fetchStaticCitiesSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchStaticCitiesError(error));
    });
};
