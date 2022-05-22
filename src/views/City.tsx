import React from "react";
import { useSelector } from "react-redux";
import { Search } from "../components/Search";
import { selectedCitySelector } from "../store/selectors";
import { CityItem } from "../components/CityItem";

type CityProps = {
  isError: boolean;
};

const City = ({ isError }: CityProps) => {
  const selectedCity = useSelector(selectedCitySelector);

  const {
    location: { name, country },
    current: {
      temp_c,
      wind_kph,
      humidity,
      cloud,
      condition: { text },
    },
    forecast: { forecastday },
  } = selectedCity;

  return (
    <>
      <Search isError={isError} />
      {!isError && (
        <CityItem
          name={name}
          country={country}
          temp={temp_c}
          wind={wind_kph}
          humidity={humidity}
          cloud={cloud}
          conditionText={text}
          days={forecastday}
        />
      )}
    </>
  );
};

export default City;
