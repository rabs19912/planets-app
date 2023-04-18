import { Planet } from "../../types/common";
import { PlanetBox, PlanetName, PlanetItem } from "./styled";

type CardProps = {
  planet: Planet;
};
function Card({ planet }: CardProps) {
  return (
    <PlanetBox>
      <PlanetName>{planet.name}</PlanetName>
      <PlanetItem>
        <span>Rotation Period: </span>
        {planet.rotation_period}
      </PlanetItem>
      <PlanetItem>
        <span>Orbital Period: </span>
        {planet.orbital_period}
      </PlanetItem>
      <PlanetItem>
        <span>Diameter: </span>
        {planet.diameter}
      </PlanetItem>
      <PlanetItem>
        <span>Climate: </span>
        {planet.climate}
      </PlanetItem>
      <PlanetItem>
        <span>Gravity: </span>
        {planet.gravity}
      </PlanetItem>
      <PlanetItem>
        <span>Terrain: </span>
        {planet.terrain}
      </PlanetItem>
      <PlanetItem>
        <span>Surface Water: </span>
        {planet.surface_water}
      </PlanetItem>
      <PlanetItem>
        <span>Population: </span>
        {planet.population}
      </PlanetItem>
    </PlanetBox>
  );
}

export { Card };
