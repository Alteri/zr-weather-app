import axios from "axios";
import { fetchCitySuccess, fetchCityError } from "./actions";

export const fetchCity = (city: string) => (dispatch: any) => {
  axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&lang=pl`
    )
    .then((response) => {
      dispatch(fetchCitySuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCityError(error));
    });
};
