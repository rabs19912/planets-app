import React from "react";
import { usePlanets } from "../../hooks";
import { NoResultsText, PlanetsContainer, SelectsContainers } from "./styled";
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
    isLoading,
  } = usePlanets();

  const [selectedFilter, setSelectedFilter] = React.useState<SelectOption>();

  const filterByClimateOptions = AVAILABLE_CLIMATES.map((climate) => {
    return { label: climate, value: climate };
  });

  const isEmptyPlanets = React.useMemo(() => {
    const isFilteredPlanets =
      typeof planets === "object" && !Boolean(planets.length);
    return isFilteredPlanets && !isLoading;
  }, [planets, isLoading]);

  const onFilterByClimate = (event: SelectOption) => {
    setSelectedFilter(event);
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
          isDisabled={isLoading}
          className="sort-select"
        />

        <FilterSelect
          onFilter={onFilterByClimate}
          filterOptions={filterByClimateOptions}
          isDisabled={isLoading}
          className="filter-select"
        />
      </SelectsContainers>

      {isLoading && <NoResultsText>Loading planets...</NoResultsText>}
      {isEmptyPlanets ? (
        <>
          <NoResultsText>
            Theres no results found, clean your filters and try again
          </NoResultsText>
        </>
      ) : (
        <>
          <PlanetsContainer>
            {planets?.map((planet, index) => {
              return <Card key={index} planet={planet} />;
            })}
          </PlanetsContainer>
          {!selectedFilter && (
            <PrevNextButtons
              next={next}
              previous={previous}
              onClickPreOrNext={updatePlanetsUrl}
            />
          )}
        </>
      )}
    </>
  );
}

export { PlanetsListView };
