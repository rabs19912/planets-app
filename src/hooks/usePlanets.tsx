import React from "react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_CACHE_KEYS } from "../utils/constants";
import { getPlanets } from "../api";
import {
  ORDER_ORIENTATION_TYPES,
  PaginatedPlanetsResult,
  Planet,
} from "../utils/types";
import { AxiosResponse } from "axios";
import { orderAlphabetical } from "../utils/common";

type usePlanetsReturn = PaginatedPlanetsResult & {
  isLoading: boolean;
  status: "error" | "success" | "loading";
  setPlanetsUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  updatePlanetsUrl: (url: string) => void;
  orderByName: (orientation: ORDER_ORIENTATION_TYPES) => void;
};

function usePlanets(): usePlanetsReturn {
  const [planetsUrl, setPlanetsUrl] = React.useState<string>();
  const [planets, setPlanets] = React.useState<Planet[]>();

  const { data, isLoading, status } = useQuery<
    AxiosResponse<PaginatedPlanetsResult>
  >([QUERY_CACHE_KEYS.planets, planetsUrl], () => getPlanets(planetsUrl), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const planetsResult = React.useMemo(() => data?.data, [data]);

  React.useEffect(() => {
    setPlanets(planetsResult?.results);
  }, [planetsResult]);

  const updatePlanetsUrl = (url: string) => setPlanetsUrl(url);

  const orderByName = React.useCallback(
    (orientation: ORDER_ORIENTATION_TYPES) => {
      const currentPlanets = planets as Planet[];
      const orderedPlanets = orderAlphabetical<Planet>(
        currentPlanets,
        "name",
        orientation
      );

      setPlanets([...(orderedPlanets as Planet[])]);
    },
    [planets, setPlanets]
  );

  return {
    results: planets,
    next: planetsResult?.next,
    previous: planetsResult?.previous,
    isLoading,
    status,
    setPlanetsUrl,
    updatePlanetsUrl,
    orderByName,
  };
}

export { usePlanets };