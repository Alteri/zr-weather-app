export type CityProps = {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    cloud: number;
    condition: {
      text: string;
    };
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
      };
    }[];
  };
};
