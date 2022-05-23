type LocationProps = {
  name: string;
  country: string;
};

type CurrentProps = {
  temp_c: number;
  wind_kph: number;
  humidity: number;
  cloud: number;
  condition: {
    text: string;
  };
};

type ForecastdayProps = {
  forecastday: {
    date: string;
    day: {
      avgtemp_c: number;
    };
  }[];
};

export type CityProps = {
  location: LocationProps;
  current: CurrentProps;
  forecast: ForecastdayProps;
};
