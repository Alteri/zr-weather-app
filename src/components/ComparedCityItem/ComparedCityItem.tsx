import React from 'react';
import { ComparedCityItemStyled } from './styled';
import { Text } from '../Text';
import { Grid } from '../Grid';

type ComparedCityItemProps = {
  name: string;
  country: string;
  temp: number;
  selectedCityTemp: number;
};

const compareCities = (selectedCityTemp: number, currentTemp: number) => {
  const compareTemp = selectedCityTemp < currentTemp ? 'cieplej' : 'zimniej';
  const tempDifference = Math.abs(selectedCityTemp - currentTemp).toFixed(2);

  const tempSubtract = selectedCityTemp - currentTemp;

  const result =
    tempDifference === '0.00' ? 'Identyczna temperatura' : `${compareTemp} o ${tempDifference}°C`;

  return [result, tempSubtract];
};

const ComparedCityItem = ({ name, country, temp, selectedCityTemp }: ComparedCityItemProps) => {
  const [result, tempSubtract] = compareCities(selectedCityTemp, temp);
  return (
    <ComparedCityItemStyled templateColumns="repeat(2, 1fr)" tempCompare={tempSubtract}>
      <Grid gap="8">
        <Text textType="h3">{name}</Text>
        <Text>{country}</Text>
      </Grid>
      <Grid gap="8">
        <Text>{temp}°C</Text>
        <Text>{result}</Text>
      </Grid>
    </ComparedCityItemStyled>
  );
};

export default ComparedCityItem;
