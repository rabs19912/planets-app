import React from "react";
import { usePlanets } from "../../hooks";
import { Box } from "./styled";
import { AVAILABLE_CLIMATES } from "../../utils/constants";
import PrevNextButtons from "../../components/PrevNextButtons";
import { ORDER_ORIENTATION_TYPES } from "../../types/common";
import { Header } from "../../components/Header/Header";

function PlanetsListView() {
  const {
    results: planets,
    next,
    previous,
    updatePlanetsUrl,
    orderByName,
    orderByDiameter,
    filterByClimate,
    resetFilters,
  } = usePlanets();

  return (
    <>
    <Header />
      {Boolean(planets?.length) &&
        planets?.map((planet, index) => {
          return (
            <Box key={index}>
              <div>NAME: {planet.name}</div>
              {/* <div>POPULATION: {planet.population}</div> */}
              <div>DIAMETER: {planet.diameter}</div>
              <div>CLIMATE: {planet.climate}</div>
            </Box>
          );
        })}
      {!Boolean(planets?.length) && (
        <div>No hay resultados que coincidan con tu busqueda o filtro</div>
      )}
      {planets && (
        <>
          <button onClick={() => orderByName(ORDER_ORIENTATION_TYPES.asc)}>
            Order by A-Z
          </button>
          <button onClick={() => orderByName(ORDER_ORIENTATION_TYPES.desc)}>
            Order by Z-A
          </button>
          <button onClick={() => orderByDiameter(ORDER_ORIENTATION_TYPES.asc)}>
            Order by Diameter MAYOR A MENOR
          </button>
          <button onClick={() => orderByDiameter(ORDER_ORIENTATION_TYPES.desc)}>
            Order by Diameter MENOR A MAYOR
          </button>
          <button onClick={resetFilters}>Reset Filters</button>
        </>
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
