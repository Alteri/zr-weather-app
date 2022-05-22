import React from "react";
import { useSelector } from "react-redux";
import { Page } from "../components/Page";
import { Search } from "../components/Search";
import { selectedCitySelector } from "../store/selectors";
import { CityItem } from "../components/CityIteam";

const City = () => {
  const selectedCity = useSelector(selectedCitySelector);

  const {
    location: { name, country },
    current: { temp_c, wind_kph, humidity, cloud },
  } = selectedCity;

  return (
    <Page>
      <Search />
      <CityItem
        name={name}
        country={country}
        temp={temp_c}
        wind={wind_kph}
        humidity={humidity}
        cloud={cloud}
      />
    </Page>
  );
};

export default City;
