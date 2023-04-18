import { usePlanets } from "../../hooks";
import { Box, SelectsContainers } from "./styled";
import { AVAILABLE_CLIMATES } from "../../utils/constants";
import { ORDER_ORIENTATION_TYPES, SelectOption } from "../../types/common";
import PrevNextButtons from "../../components/PrevNextButtons";
import Header from "../../components/Header";
import SortSelect from "../../components/SortSelect";
import FilterSelect from "../../components/FilterSelect";

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


  const filterByClimateOptions = AVAILABLE_CLIMATES.map((climate) => {
    return { label: climate, value: climate };
  });

  const onFilterByClimate = (event: SelectOption) => {
    if (!event) {
      resetFilters();
      return;
    }
    filterByClimate(event?.value);
  };

  return (
    <>
      <Header />
      <SelectsContainers>
        <SortSelect
          orderByName={orderByName}
          orderByDiameter={orderByDiameter}
          resetFilters={resetFilters}
        />

        <FilterSelect
          onFilter={onFilterByClimate}
          filterOptions={filterByClimateOptions}
        />

      </SelectsContainers>
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
      <PrevNextButtons
        next={next}
        previous={previous}
        updatePlanetsUrl={updatePlanetsUrl}
      />
    </>
  );
}

export { PlanetsListView };
