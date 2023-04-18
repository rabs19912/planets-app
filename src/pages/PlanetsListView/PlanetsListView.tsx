import { usePlanets } from "../../hooks";
import {
  PlanetsContainer,
  SelectsContainers,
} from "./styled";
import { AVAILABLE_CLIMATES } from "../../utils/constants";
import { SelectOption } from "../../types/common";
import PrevNextButtons from "../../components/PrevNextButtons";
import Header from "../../components/Header";
import SortSelect from "../../components/SortSelect";
import FilterSelect from "../../components/FilterSelect";
import Card from "../../components/Card";

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
      <PlanetsContainer>
        {Boolean(planets?.length) &&
          planets?.map((planet, index) => {
            return (
              <Card key={index} planet={planet}/>
            );
          })}
        {!Boolean(planets?.length) && (
          <div>No hay resultados que coincidan con tu busqueda o filtro</div>
        )}
      </PlanetsContainer>
      <PrevNextButtons
        next={next}
        previous={previous}
        updatePlanetsUrl={updatePlanetsUrl}
      />
    </>
  );
}

export { PlanetsListView };
