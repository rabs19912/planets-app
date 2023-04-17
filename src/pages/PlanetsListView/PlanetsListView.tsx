import React from "react";
import { usePlanets } from "../../hooks";
import { ORDER_ORIENTATION_TYPES, Planet, PlanetProperty } from "../../utils/types";
import { Box } from "./styled";
import { AVAILABLE_CLIMATES } from "../../utils/constants";

type PrevNextButtonsProps = {
  previous?: string | null;
  next?: string;
  updatePlanetsUrl: (url: string) => void;
};

function PrevNextButtons({
  previous,
  next,
  updatePlanetsUrl,
}: PrevNextButtonsProps) {
  return (
    <>
      {next && <div onClick={() => updatePlanetsUrl(next as string)}>next</div>}
      {previous && (
        <div onClick={() => updatePlanetsUrl(previous as string)}>previous</div>
      )}
    </>
  );
}

function orderByNumber<T>(
  array: T[],
  property: keyof T,
  orientation: ORDER_ORIENTATION_TYPES
) {
  return array.sort((a, b) => {
    const valueA = Number(a[property]);
    const valueB = Number(b[property]);
    return orientation === ORDER_ORIENTATION_TYPES.asc
      ? valueB - valueA
      : valueA - valueB;
  });
}

function PlanetsListView() {
  const { results, next, previous, updatePlanetsUrl, orderByName } = usePlanets();
  const [planets, setPlanets] = React.useState<Planet[]>();

  React.useEffect(() => {
    setPlanets(results);
  }, [results]);

  // const orderByName = React.useCallback(
  //   (orientation: ORDER_ORIENTATION_TYPES) => {
  //     const currentPlanets = planets as Planet[];
  //     const orderedPlanets = orderAlphabetical<Planet>(
  //       currentPlanets,
  //       "name",
  //       orientation
  //     );

  //     setPlanets([...(orderedPlanets as Planet[])]);
  //   },
  //   [planets, setPlanets]
  // );

  const orderByDiameter = React.useCallback(
    (orientation: ORDER_ORIENTATION_TYPES) => {
      const currentPlanets = planets as Planet[];
      const orderedPlanets = orderByNumber<Planet>(
        currentPlanets,
        "diameter",
        orientation
      );
      setPlanets([...(orderedPlanets as Planet[])]);
    },
    [planets, setPlanets]
  );

  const filterByClimate = React.useCallback(
    (climate: string) => {
      const newPlanets = results?.filter((planet) =>
        planet.climate.includes(climate)
      );
      setPlanets([...(newPlanets as Planet[])]);
    },
    [setPlanets, results]
  );

  return (
    <>
      {planets?.map((planet, index) => {
        return (
          <Box key={index}>
            <div>NAME: {planet.name}</div>
            {/* <div>POPULATION: {planet.population}</div> */}
            <div>DIAMETER: {planet.diameter}</div>
            <div>CLIMATE: {planet.climate}</div>
          </Box>
        );
      })}
      {planets && (
        <button onClick={() => orderByName(ORDER_ORIENTATION_TYPES.asc)}>
          Order by A-Z
        </button>
      )}
      {planets && (
        <button onClick={() => orderByName(ORDER_ORIENTATION_TYPES.desc)}>
          Order by Z-A
        </button>
      )}
      {/* {planets && <button onClick={orderByPopulation}>Order by population</button>} */}
      {planets && (
        <button onClick={() => orderByDiameter(ORDER_ORIENTATION_TYPES.asc)}>
          Order by Diameter MAYOR A MENOR
        </button>
      )}
      {planets && (
        <button onClick={() => orderByDiameter(ORDER_ORIENTATION_TYPES.desc)}>
          Order by Diameter MENOR A MAYOR
        </button>
      )}

      {AVAILABLE_CLIMATES.map((climate, index) => {
        return (
          <div key={index} onClick={() => filterByClimate(climate)}>
            {climate}
          </div>
        );
      })}

      <PrevNextButtons
        next={next}
        previous={previous}
        updatePlanetsUrl={updatePlanetsUrl}
      />
    </>
  );
}

export { PlanetsListView };
