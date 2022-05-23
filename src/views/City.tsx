import React from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../components/Search';
import { selectedCitySelector, comparedCitySelector } from '../store/selectors';
import { SelectedCityItem } from '../components/SelectedCityItem';
import { ComparedCityItem } from '../components/ComparedCityItem';
import { Grid } from '../components/Grid';
import { AddNewCity } from '../components/AddNewCity';
import Spinner from 'react-bootstrap/Spinner';

type CityProps = {
  isError: boolean;
};

const City = ({ isError }: CityProps) => {
  const selectedCity = useSelector(selectedCitySelector);
  const comparedCities = useSelector(comparedCitySelector);
  const pending = useSelector((state: { isPending: boolean }) => state.isPending);

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
      {!pending ? (
        !isError && (
          <>
            <SelectedCityItem
              name={name}
              country={country}
              temp={temp_c}
              wind={wind_kph}
              humidity={humidity}
              cloud={cloud}
              conditionText={text}
              days={forecastday}
            />
            <AddNewCity />
            <Grid gap="16">
              {comparedCities.map(({ location: { name, country }, current }, index) => (
                <ComparedCityItem
                  key={index}
                  name={name}
                  country={country}
                  temp={current.temp_c}
                  selectedCityTemp={temp_c}
                />
              ))}
            </Grid>
          </>
        )
      ) : (
        <Grid justifyContent="center">
          <Spinner animation="grow" />
        </Grid>
      )}
    </>
  );
};

export default City;
