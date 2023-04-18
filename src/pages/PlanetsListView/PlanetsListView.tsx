import React from "react";
import { usePlanets } from "../../hooks";
import { Box } from "./styled";
import { AVAILABLE_CLIMATES } from "../../utils/constants";
import PrevNextButtons from "../../components/PrevNextButtons";
import { ORDER_ORIENTATION_TYPES } from "../../types/common";
import { Header } from "../../components/Header/Header";
import Select, { SingleValue } from "react-select";

type SelectOption = SingleValue<{
  value: SORT_OPTIONS;
  label: string;
  data: { order: ORDER_ORIENTATION_TYPES };
}>;
//  {
//   value: SORT_OPTIONS;
//   label: string;
//   data: {
//     order: ORDER_ORIENTATION_TYPES;
//   };
// };
enum SORT_OPTIONS {
  ascAlphabet = "asc_alphabet",
  descAlphabet = "desc_alphabet",
  ascDiameter = "asc_diameter",
  descDiameter = "desc_diameter",
}

const sortOptions = [
  {
    value: SORT_OPTIONS.ascAlphabet,
    label: "A-Z",
    data: { order: ORDER_ORIENTATION_TYPES.asc },
  },
  {
    value: SORT_OPTIONS.descAlphabet,
    label: "Z-A",
    data: { order: ORDER_ORIENTATION_TYPES.desc },
  },
  {
    value: SORT_OPTIONS.ascDiameter,
    label: "Diameter Ascending",
    data: { order: ORDER_ORIENTATION_TYPES.asc },
  },
  {
    value: SORT_OPTIONS.descDiameter,
    label: "Diameter Descending",
    data: { order: ORDER_ORIENTATION_TYPES.desc },
  },
];

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

  const onSort = (event: SelectOption) => {
    if (!event) {
      resetFilters();
      return;
    }
    switch (event.value) {
      case SORT_OPTIONS.ascDiameter:
      case SORT_OPTIONS.descDiameter:
        orderByDiameter(event.data.order);
        break;
      case SORT_OPTIONS.ascAlphabet:
      case SORT_OPTIONS.descAlphabet:
      default:
        orderByName(event.data.order);
        break;
    }
  };

  return (
    <>
      <Header />
      <Select
        options={sortOptions}
        isClearable
        isSearchable
        onChange={onSort}
      />
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
