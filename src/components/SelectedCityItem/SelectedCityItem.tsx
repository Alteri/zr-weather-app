import React, { useMemo } from 'react';
import { SelectedCityItemStyled } from './styled';
import { Text } from '../Text';
import { WindIcon, DropletIcon, CloundIcon } from '../Icon';
import { Grid } from '../Grid';

type SelectedCityItemProps = {
  name: string;
  country: string;
  temp: number;
  wind: number;
  humidity: number;
  cloud: number;
  conditionText: string;
  days: {
    date: string;
    day: {
      avgtemp_c: number;
    };
  }[];
};

const SelectedCityItem = ({
  name,
  temp,
  country,
  wind,
  humidity,
  cloud,
  conditionText,
  days,
}: SelectedCityItemProps) => {
  const weather_information = useMemo(() => {
    const memoizeInformation = [
      {
        icon: <WindIcon />,
        info: `${wind}km/h`,
      },
      {
        icon: <DropletIcon />,
        info: `${humidity}%`,
      },
      {
        icon: <CloundIcon />,
        info: `${cloud}%`,
      },
    ];
    return memoizeInformation;
  }, [wind, humidity, cloud]);

  return (
    <SelectedCityItemStyled gap="24">
      <Grid gap="4">
        <Text textType="h1">{name}</Text>
        <Text>{country}</Text>
      </Grid>
      <Grid gap="8">
        <Text textType="h2">{temp}°C</Text>
        <Text>{conditionText}</Text>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap="8">
        {weather_information.map(({ icon, info }, index) => (
          <Grid gap="4" key={index}>
            {icon}
            <Text>{info}</Text>
          </Grid>
        ))}
      </Grid>
      <Grid gap="16">
        <Text textType="h3">Temperatura na kolejne dni</Text>
        <Grid templateColumns="repeat(3, 1fr)">
          {days.map(({ date, day: { avgtemp_c } }) => (
            <Grid key={date} gap="8">
              <Text>{date}</Text>
              <Text>{avgtemp_c}°C</Text>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </SelectedCityItemStyled>
  );
};

export default SelectedCityItem;
