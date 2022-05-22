import React, { useMemo } from 'react';
import { CityItemStyled } from './styled';
import { Text } from '../Text';
import { WindIcon, DropletIcon, CloundIcon } from '../Icon';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Grid } from '../Grid';

type CityItemProps = {
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

const CityItem = ({
  name,
  temp,
  country,
  wind,
  humidity,
  cloud,
  conditionText,
  days,
}: CityItemProps) => {
  const weather_information = useMemo(() => {
    const memoizeInformation = [
      {
        icon: <WindIcon />,
        info: `${wind}km/h`,
        tooltipInfo: 'Prędkność wiatru',
      },
      {
        icon: <DropletIcon />,
        info: `${humidity}%`,
        tooltipInfo: 'Wilgotność',
      },
      {
        icon: <CloundIcon />,
        info: `${cloud}%`,
        tooltipInfo: 'Zachmurzenie',
      },
    ];
    return memoizeInformation;
  }, [wind, humidity, cloud]);

  return (
    <CityItemStyled gap="24">
      <Grid gap="4">
        <Text textType="h1">{name}</Text>
        <Text>{country}</Text>
      </Grid>
      <Grid gap="8">
        <Text textType="h2">{temp}°C</Text>
        <Text>{conditionText}</Text>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap="8">
        {weather_information.map(({ icon, info, tooltipInfo }) => (
          <OverlayTrigger
            key={tooltipInfo}
            placement="bottom"
            overlay={<Tooltip>{tooltipInfo}</Tooltip>}
          >
            <div>
              <Grid gap="4">
                {icon}
                <Text>{info}</Text>
              </Grid>
            </div>
          </OverlayTrigger>
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
    </CityItemStyled>
  );
};

export default CityItem;
