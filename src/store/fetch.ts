import axios from "axios";
import {
  fetchCitySuccess,
  fetchCityError,
  fetchCompareCitiesSuccess,
  fetchCompareCitiesError,
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

const allCities = [
  `${process.env.REACT_APP_BASE_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=Lublin&lang=pl`,
  `${process.env.REACT_APP_BASE_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=Warszawa&lang=pl`,
  `${process.env.REACT_APP_BASE_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=Wroclaw&lang=pl`,
];

export const fetchCompareCities = () => (dispatch: any) => {
  axios
    .all(allCities.map((city) => axios.get(city)))
    .then((response) => {
      response.forEach((item) => {
        dispatch(fetchCompareCitiesSuccess(item.data));
      });
    })
    .catch((error) => {
      dispatch(fetchCompareCitiesError(error));
    });
};
