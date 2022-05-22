import React from "react";
import { CityItemStyled } from "./styled";
import { Text } from "../Text";
import { WindIcon, DropletIcon, CloundIcon } from "../Icon";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Grid } from "../Grid";

type CityItemProps = {
  name: string;
  country: string;
  temp: number;
  wind: number;
  humidity: number;
  cloud: number;
};

const CityItem = ({
  name,
  temp,
  country,
  wind,
  humidity,
  cloud,
}: CityItemProps) => {
  const weatherInformation = [
    {
      icon: <WindIcon />,
      info: `${wind}km/h`,
      tooltipInfo: "Prędkność wiatru",
    },
    {
      icon: <DropletIcon />,
      info: `${humidity}%`,
      tooltipInfo: "Wilgotność",
    },
    {
      icon: <CloundIcon />,
      info: `${cloud}%`,
      tooltipInfo: "Zachmurzenie",
    },
  ];

  return (
    <CityItemStyled>
      <Grid gap="4">
        <Text textType="h1">{name}</Text>
        <Text>{country}</Text>
      </Grid>
      <Text textType="h2">{temp}°C</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="8">
        {weatherInformation.map(({ icon, info, tooltipInfo }, index) => (
          <OverlayTrigger
            key={index}
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
    </CityItemStyled>
  );
};

export default CityItem;
