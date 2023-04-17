import React from "react";
import { usePlanets } from "../../hooks";
import { ORDER_ORIENTATION_TYPES } from "../../utils/types";
import { Box } from "./styled";
import { AVAILABLE_CLIMATES } from "../../utils/constants";
import PrevNextButtons from "../../components/PrevNextButtons";

function PlanetsListView() {
  const {
    results: planets,
    next,
    previous,
    updatePlanetsUrl,
    orderByName,
    orderByDiameter,
    filterByClimate,
  } = usePlanets();

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
