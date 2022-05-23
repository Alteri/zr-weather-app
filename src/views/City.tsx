import React from 'react';
import { useSelector } from 'react-redux';
import { Search } from '../components/Search';
import { selectedCitySelector } from '../store/selectors';
import { SelectedCityItem } from '../components/SelectedCityItem';
import { Grid } from '../components/Grid';
import Spinner from 'react-bootstrap/Spinner';

type CityProps = {
  isError: boolean;
};

const City = ({ isError }: CityProps) => {
  const selectedCity = useSelector(selectedCitySelector);
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
